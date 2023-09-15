<template>
  <div id="AdminArticleManger">
    <el-table
      :data="tableData"
      border
      align="center"
      :row-class-name="tableRowClassName"
      style="width: 100%"
    >
      <el-table-column
        prop="_id"
        label="ID"
      >
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        :key="flag"
      >
        <template slot-scope="scope">
          <div v-if="scope.row.isEdit">
            <el-input
              v-model="scope.row.title"
              placeholder="请输入内容"
              @blur="titleInputBlur(scope.row)"
            ></el-input>
          </div>
          <div v-else>{{ scope.row.title }}</div>
        </template>

      </el-table-column>
      <el-table-column
        prop="time"
        :formatter="fmttime"
        label="发表日期"
      >
      </el-table-column>
      <el-table-column
        prop="pv"
        label="浏览量"
      >
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            :key="index"
            slot="reference"
            size="mini"
            type="primary"
            icon="el-icon-edit"
            :disabled="scope.row.isEdit"
            @click="editArticle(scope.$index, scope.row)"
          >编辑
          </el-button>
          <el-popconfirm
            confirm-button-text='好的'
            cancel-button-text='不用了'
            icon="el-icon-info"
            icon-color="red"
            title="确定删除吗？"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <el-button
              slot="reference"
              size="mini"
              icon="el-icon-delete"
              type="danger"
            >删除
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AdminArticleManger",
  data() {
    return {
      tableData: [],
      titelInput: '',
      flag: 0,
      title: '',
      index: 0
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      return ((rowIndex + 1) % 2 === 0) ? 'success-row' : "wraning-row";
    },
    //请求文章数据
    async getArticle() {
      let res = await this.$axios.post('/admin/getArticle')

      this.tableData = res.data.data.map(item => {
        return {
          ...item,
          isEdit: false,
        }
      })
      this.index++
      console.log(this.tableData)
    },

    //表格事件格式化
    fmttime(row, column, cellValue, index) {
      let date = new Date(cellValue),
        YY = date.getFullYear(),
        MM = date.getMonth() + 1,
        DD = date.getDate(),
        hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds()
      return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`
    },

    async editArticle(i, r) {
      this.title = r.title
      console.log(i, r)
      this.tableData.forEach(item => {
        if (item._id === r._id) {
          item.isEdit = true
          this.flag++
        }
      })
    },
    async titleInputBlur(r) {
      let { data } = await this.$axios({
        method: "post",
        url: "/admin/editAticleTitle",
        data: { newName: this.title, articleId: r._id }
      })
      if (data.code !== 0) return
      this.$message.success(data.msg)
      this.getArticle()
      this.tableData.forEach(item => {
        if (item._id === r._id) {
          item.isEdit = false
          this.flag++
        }
      })
    },

    //删除文章
    async handleDelete(index, row) {
      let { data } = await this.$axios({
        method: "delete",
        url: "/admin/article",
        data: { _id: row._id }
      })

      if (data.code !== 0) return

      //删除成功，更新数据
      this.$message.success("删除成功")
      this.getArticle()
      //事件车让HotArticle模块更新内容
      this.$bus.$emit("articleUpdate")

    }
  },
  async created() {
    this.getArticle()
  }
}
</script>

<style scoped lang="less">
/deep/.el-table .success-row {
  background: #e4fcd7;
}
/deep/.el-table .wraning-row {
  background: rgb(223, 185, 114) !important;
}
/deep/.el-table th,
.el-table tr {
  background: rgb(109, 171, 225) !important;
  color: #fff;
}
/deep/.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgb(152, 228, 239);
}
.el-button {
  margin: 0 2px;
}
</style>














