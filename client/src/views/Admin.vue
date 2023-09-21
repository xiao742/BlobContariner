<!--
 * @Author: Mr.xiao
 * @Date: 2022-12-12 17:45:36
 * @LastEditTime: 2023-09-21 18:03:42
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
      <h1 class="my-words">
        <span class="text"> 您</span>
        <span class="text">所</span>
        <span class="text"> 登</span>
        <span class="text"> 录</span>
        <span class="text"> 的</span>
        <span class="text"> 不</span>
        <span class="text"> 是管</span>
        <span class="text"> 理</span>
        <span class="text"> 员</span>
        <span class="text"> 账</span>
        <span class="text"> 号</span>
        <span class="text"> ，</span>
        <router-link to="/">返回首页</router-link>
      </h1>

    </div>
    <div
      class="admin_tab_container"
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
body {
  background-color: skyblue;
  margin: 0;
  padding: 0;
}
.my-words span {
  position: relative;
  animation: my-words 2s infinite;
}
.my-words span:nth-child(2n) {
  animation-delay: 0.3s;
}
.my-words span:nth-child(3n) {
  animation-delay: 0.15s;
}
.my-words span:nth-child(5n) {
  animation-delay: 0.4s;
}
.my-words span:nth-child(7n) {
  animation-delay: 0.25s;
}
.my-words span:nth-child(9n) {
  animation-delay: 0.15s;
}
h1 {
  letter-spacing: 1px;
  margin: 0 auto;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 6rem;
  color: #ff9c55;
  text-shadow: -1px -1px #0d4e3b, -1px -0.75px #0d4e3b, -1px -0.5px #0d4e3b,
    -1px -0.25px #0d4e3b, -1px 0px #0d4e3b, 1px -1px #0d4e3b,
    1px -0.75px #0d4e3b, 1px -0.5px #0d4e3b, 1px -0.25px #0d4e3b,
    1px 0px #0d4e3b, 0px 1px #0d4e3b, -0.25px 1px #0d4e3b, -0.5px 1px #0d4e3b,
    -0.75px 1px #0d4e3b, -1px 1px #0d4e3b, 0 0.25px #0d4e3b, 0 0.5px #0d4e3b,
    0 0.75px #0d4e3b, -0.75px 0.75px #0d4e3b, -0.25px 0.25px #0d4e3b,
    1px 0.25px #0d4e3b, 1px 0.5px #0d4e3b, 1px 0.75px #0d4e3b, 1px 1px #0d4e3b,
    0px 6px #0d4e3b, -1px 6px #0d4e3b, -1px 5px #0d4e3b, -1px 5.75px #0d4e3b,
    -1px 5.5px #0d4e3b, -1px 5.25px #0d4e3b, -1px 4px #0d4e3b,
    -1px 4.75px #0d4e3b, -1px 4.5px #0d4e3b, -1px 4.25px #0d4e3b,
    -1px 3px #0d4e3b, -1px 3.75px #0d4e3b, -1px 3.5px #0d4e3b,
    -1px 3.25px #0d4e3b, -1px 2px #0d4e3b, -1px 2.75px #0d4e3b,
    -1px 2.5px #0d4e3b, -1px 2.25px #0d4e3b, -1px 1px #0d4e3b,
    -1px 1.75px #0d4e3b, -1px 1.5px #0d4e3b, -1px 1.25px #0d4e3b,
    1px 5px #0d4e3b, 1px 5.75px #0d4e3b, 1px 5.5px #0d4e3b, 1px 5.25px #0d4e3b,
    1px 4px #0d4e3b, 1px 4.75px #0d4e3b, 1px 4.5px #0d4e3b, 1px 4.25px #0d4e3b,
    1px 3px #0d4e3b, 1px 3.75px #0d4e3b, 1px 3.5px #0d4e3b, 1px 3.25px #0d4e3b,
    1px 2px #0d4e3b, 1px 2.75px #0d4e3b, 1px 2.5px #0d4e3b, 1px 2.25px #0d4e3b,
    1px 1px #0d4e3b, 1px 1.75px #0d4e3b, 1px 1.5px #0d4e3b, 1px 1.25px #0d4e3b;
}
h1 span:nth-child(2n) {
  color: #f47aff;
}
h1 span:nth-child(3n) {
  color: #ffd913;
}
h1 span:nth-child(5n) {
  color: #555bff;
}
h1 span:nth-child(7n),
h1 span:nth-child(12n) {
  color: #ff5555;
}
@keyframes my-words {
  0% {
    top: 0;
  }
  50% {
    top: -10px;
  }
  100% {
    top: 0;
  }
}
.admin_tab_container {
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
.admin_tab_container {
  background-color: #fff;
  padding: 20px;
}
a:hover {
  text-decoration: underline;
  color: #60cdb6;
}
</style>














