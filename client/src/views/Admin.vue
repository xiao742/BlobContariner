<!--
 * @Author: Mr.xiao
 * @Date: 2022-12-12 17:45:36
 * @LastEditTime: 2023-09-18 16:23:48
 * @LastEditors: 雨落潇潇
 * @Description: 后端管理
 * @text: 惑而不从师,其为惑也,终不解矣.
-->
<template>
  <div id="Admin">
    <div
      class="no"
      v-if="!isAdmin"
    >
      您所登录的不是管理员账号，<router-link to="/">返回首页</router-link>
    </div>
    <div
      class="yes"
      v-else
    >
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
  animation: animate 2s;
  transition: 0.6s;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.yes {
  background-color: #fff;
  padding: 20px;
}
</style>














