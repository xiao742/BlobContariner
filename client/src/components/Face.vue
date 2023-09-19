<template>
  <div id="Face">
    <el-popover
      placement="bottom"
      class="Face-popover"
      width="50px"
      trigger="hover"
    >
      <!--默认显示出来的-->
      <div
        slot="reference"
        class="img"
        :title="userInfo.user"
        :style="{
          backgroundImage: `url(${urlBase}${userInfo.face})`
        }"
      ></div>
      <!--hover之后显示的-->
      <div class="list">
        <el-button
          type="primary"
          size="mini"
          @click="handleUserUpdate"
        >修改信息</el-button>
        <br>
        <el-button
          type="danger"
          size="mini"
          @click="handleUserLogout"
        >退出登录</el-button>
      </div>
    </el-popover>
    <!-- 时间 -->
    <!-- <div class="timer">
      <Timer></Timer>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex"
import Timer from "@/components/Timer";
export default {
  name: "Face",
  data() {
    return {
    }
  },
  components: {
    Timer
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    //更新用户信息
    handleUserUpdate() {
      this.$router.push("/userinfo")
    },

    //退出登录
    async handleUserLogout() {
      await this.$axios({
        method: "post",
        url: "/login/logout"
      })

      window.location.href = "/"
    }
  }
}
</script>

<style scoped lang="less">
#Face {
  position: relative;
  // top: 8px;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 1px 1px 10px #fff;
  // box-shadow: 0 0 5px #555;
  cursor: pointer;
  .img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }
}
.el-button {
  margin: 5px 0 !important;
}
</style>














