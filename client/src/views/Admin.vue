<template>
  <div id="Admin">
    <div class="no" v-if="!isAdmin">
      您所登录的不是管理员账号，<router-link to="/">返回首页</router-link>
    </div>
    <div class="yes" v-else>
      <el-tabs tab-position="top">
        <el-tab-pane label="文章管理">
          <AdminArticleManger></AdminArticleManger>
        </el-tab-pane>
        <el-tab-pane label="文章发表">
          <AdminArticlePublish></AdminArticlePublish>
        </el-tab-pane>
        <el-tab-pane label="添加友链">
          <AdminLinkAdd></AdminLinkAdd>
        </el-tab-pane>
        <el-tab-pane label="管理友链">
          <AdminLinkManger></AdminLinkManger>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import AdminArticlePublish from "@/components/admin/AdminArticlePublish";
import AdminArticleManger from "@/components/admin/AdminArticleManger";
import AdminLinkAdd from "@/components/admin/AdminLinkAdd";
import AdminLinkManger from "@/components/admin/AdminLinkManger";
export default {
  name: "Admin",
  components: {
    AdminArticlePublish,
    AdminArticleManger,
    AdminLinkAdd,
    AdminLinkManger,
  },
  data() {
    return {
      isAdmin: false,
    };
  },
  async created() {
    let { data } = await this.$axios({
      method: "post",
      url: "/admin",
    });

    this.isAdmin = data.code === 0;
    console.log("this.admin", this.isAdmin);
  },
};
</script>

<style scoped lang="less">
.yes {
  background-color: #fff;
  padding: 20px;
}
</style>














