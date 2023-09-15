<template>
  <div id="AdminLinkManger">
    <el-table
      :data="tableData"
      border
      :row-class-name="tableRowClassName"
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="名称"
      >
      </el-table-column>
      <el-table-column
        prop="src"
        label="链接地址"
      >
      </el-table-column>
      <el-table-column
        prop="des"
        label="描述"
      >
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
      >
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
  name: "AdminLinkManger",
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      return ((rowIndex + 1) % 2 === 0) ? 'success-row' : "wraning-row";
    },
    async getLinks() {
      let res = await this.$axios.get("/links")
      this.tableData = res.data.data
    },
    async handleDelete(index, row) {
      let { data } = await this.$axios({
        method: "delete",
        url: "/admin/link",
        data: { _id: row._id }
      })

      if (data.code !== 0) return

      this.$message.success("删除成功")
      this.getLinks()

    }
  },
  created() {
    this.getLinks()
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














