<template>
  <div id="app">
    <!--顶部-->
    <div class="header">
      <AppNav></AppNav>
    </div>
    <!--底部-->
    <div class="footer">
      <!--侧边栏-->
      <AppSide></AppSide>
      <!--内容部分-->
      <div class="f-content">
        <router-view />
      </div>
    </div>
    <!-- 时间 -->
    <div class="timer">
      <Timer></Timer>
    </div>
    <!--备案号-->
    <p class="copyright">黔ICP备19002644号</p>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";
import AppSide from "@/components/AppSide";
import Timer from "@/components/Timer";
import { mapMutations } from "vuex";
export default {
  components: {
    AppNav,
    AppSide,
    Timer
  },
  methods: {
    ...mapMutations(["login"]),
  },
  async mounted() {
    //页面加载后，检测是否已经保存登录信息了
    let { data } = await this.$axios({
      method: "post",
      url: "/login/check",
    });

    //更新vuex
    data.code === 0 && this.login(data.data);
  },
};
</script>

<style lang="less">
@import "./assets/css/reset.css";
@import "./assets/css/font.css";
@import "./assets/css/font/iconfont.css";

body {
  background: url("./assets/img/bg/bg-left.png") no-repeat left 50px,
    url("./assets/img/bg/bg-right.png") no-repeat right 50px;
  background-color: rgb(242, 242, 242);
}

html,
body {
  min-width: 850px;
}

#app {
  width: 100%;
  > .header {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 850px;
    height: 50px;
  }
  > .footer {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    max-width: 1300px;
    padding: 0 15px;
    margin: 120px auto 0;

    > .f-content {
      overflow: hidden;
      flex: 1;
      //background-color: #c2e8ee;
    }
  }
  > .copyright {
    padding: 20px 0;
    font-weight: 400;
    text-align: center;
    font-size: 12px;
    letter-spacing: 2px;
  }
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 3px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  background: #adebf8;
}

::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  background: #ededed;
}

.el-popover {
  min-width: 50px !important;
}
</style>
