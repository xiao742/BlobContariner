<template>
  <div id="AdminArticleManger">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="_id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="time"
        :formatter="fmttime"
        label="发表日期">
      </el-table-column>
      <el-table-column
        prop="pv"
        label="浏览量">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
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
      tableData: []
    }
  },
  methods: {
    //请求文章数据
    async getArticle() {
      let res = await this.$axios.post('/admin/getArticle')

      this.tableData = res.data.data
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

    //删除文章
    async handleDelete(index, row) {
      let {data} = await this.$axios({
        method: "delete",
        url: "/admin/article",
        data: {_id: row._id}
      })

      if (data.code !== 0)return

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

<style scoped>

</style>














