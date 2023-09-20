<template>
  <div id="AppNav">
    <div class="content">
      <!--logo-->
      <div class="logo">
        <a href="/">WingFong.fun</a>
      </div>
      <!--导航-->
      <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/article">文章</router-link>
        <router-link to="/message">留言</router-link>
        <router-link to="/link">友链</router-link>
        <router-link to="about">关于</router-link>
      </div>
      <!--登陆注册-->
      <Face v-if="userInfo._id"></Face>
      <div
        v-else
        class="user"
      >
        <el-button
          class="login"
          type="success"
          size="mini"
          @click="handleLogin"
        >登陆 / 注册
        </el-button>
      </div>
    </div>

    <!--登陆与注册的弹窗-->
    <Login
      v-show="ifShowLogin"
      @close="handleClose"
    ></Login>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Face from "@/components/Face";
import { mapState } from "vuex";

export default {
  name: "AppNav",
  components: {
    Login,
    Face,
  },
  data() {
    return {
      ifShowLogin: false,
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    //登陆按钮点击
    handleLogin() {
      this.ifShowLogin = true;
    },

    //登陆弹窗关闭
    handleClose() {
      this.ifShowLogin = false;
    },
  },
};
</script>

<style lang="less" scoped>
#AppNav {
  width: 100%;
  height: 86px;
  background-color: #fff;
  box-shadow: 0 0 2px #999;
  opacity: 1;
  background-image: linear-gradient(
    to bottom right,
    #e0ffff,
    #afeeee,
    #e0ffff,
    #afeeee
  );
  // background-image: linear-gradient(to bottom right, #d4e4e7, #d7d1b2, #a2b5b8);

  .content {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    max-width: 1300px;
    align-items: center;
    padding: 0 15px;
    //background-color: pink;
    margin: 0 auto;

    /*logo*/

    .logo {
      // width: 130px;
      height: 100%;

      a {
        display: block;
        width: 100%;
        height: 100%;
        // line-height: 42px;
        font-size: 40px;
        letter-spacing: 5px;
        font-family: "Pacifico", "serif";
        color: rgba(0, 0, 0, 0.7);
      }
    }

    /*导航*/

    .nav {
      width: 470px;
      height: 50px;
      //background-color: aquamarine;
      a {
        float: left;
        display: block;
        height: 98%;
        border-bottom: 2px solid transparent;
        padding: 0 25px;
        color: #777;
        line-height: 48px;
        font-weight: bolder;
        font-size: 20px;
        transition: all 0.3s;

        &.router-link-exact-active {
          color: #00b7ff;
          border-color: #00b7ff;
        }

        &:hover {
          color: #00b7ff;
        }
      }
    }

    /*登陆与注册*/

    .user {
      height: 50px;
      //background-color: antiquewhite;
      .el-button {
        display: block;
        margin-top: 11px;
      }

      .login {
        float: left;
      }

      .register {
        float: right;
      }
    }
  }
}
</style>














