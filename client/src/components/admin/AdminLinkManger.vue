<template>
  <div id="AdminLinkManger">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="src"
        label="链接地址">
      </el-table-column>
      <el-table-column
        prop="des"
        label="描述">
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
  name: "AdminLinkManger",
  data(){
    return {
      tableData: []
    }
  },
  methods: {
    async getLinks(){
      let res = await this.$axios.get("/links")
      this.tableData = res.data.data
    },
    async handleDelete(index, row){
      let {data} = await this.$axios({
        method: "delete",
        url: "/admin/link",
        data: {_id: row._id}
      })

      if (data.code !== 0)return

      this.$message.success("删除成功")
      this.getLinks()

    }
  },
  created() {
    this.getLinks()
  }
}
</script>

<style scoped>

</style>














