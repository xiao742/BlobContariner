<template>
  <div
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.6)"
    id="Login"
    @click="handleClose"
  >
    <div
      class="content"
      :style="{height:isLogin ? '360px' : '500px'}"
      @click.stop
    >

      <div class="header_container">
        <h2 @click="change(true)">LOGIN</h2>
        <h2>|</h2>
        <h2 @click="change(false)">REGISTER</h2>
      </div>
      <div
        v-if="isLogin"
        class="login-box"
        @click.stop
      >
        <el-form
          :model="loginForm"
          status-icon
          :rules="rules"
          ref="loginForm"
          class="form"
          label-width="70px"
          label-position="top"
          @keyup.enter.native="loginSubmit('loginForm')"
        >
          <el-form-item
            label="用户名"
            prop="user"
          >
            <el-input
              type="text"
              v-model="loginForm.user"
              clearable
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密码（6～18个字符）"
            prop="pass"
          >
            <el-input
              type="password"
              clearable
              v-model="loginForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="btn_login"
              @click="loginSubmit('loginForm')"
            >登陆
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </el-button>

          </el-form-item>
        </el-form>
      </div>
      <div
        v-else
        class="register-box"
        @click.stop
      >
        <el-form
          :model="registerForm"
          status-icon
          :rules="rules"
          ref="registerForm"
          label-width="80px"
          class="form"
          label-position="top"
          @keyup.enter.native="registerSubmit('registerForm')"
        >
          <el-form-item
            label="用户名"
            prop="user"
          >
            <el-input
              type="text"
              v-model="registerForm.user"
              autocomplete="off"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密码（6～18个字符）"
            prop="pass"
          >
            <el-input
              type="password"
              v-model="registerForm.pass"
              autocomplete="off"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item
            label="确认密码（6～18个字符）"
            prop="pass2"
          >
            <el-input
              type="password"
              v-model="registerForm.pass2"
              clearable
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="btn_login"
              @click="registerSubmit('registerForm')"
            >注册
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div
        class="close"
        @click="handleClose"
      >×</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      isLogin: true,
      activeName: "login",
      loginForm: {
        user: "",
        pass: "",
      },
      rules: {
        /*用户名规则*/
        user: [
          {
            validator(rule, value, callback) {
              if (/^[\w\u4e00-\u9fa5]{2,8}$/.test(value)) {
                callback();
              } else {
                callback(new Error("用户名不满足规则"));
              }
            },
            required: true,
            trigger: "blur",
          },
        ],

        /*密码规则*/
        pass: [
          {
            validator(rule, value, callback) {
              if (
                /^[\w\[\]\/\\\-!@#$%^&*()+=|,.<>?:;"'{}]{6,18}$/.test(value)
              ) {
                callback();
              } else {
                callback(new Error("密码不满足规则"));
              }
            },
            required: true,
            trigger: "blur",
          },
        ],

        /*再次输入密码规则*/
        pass2: [
          {
            validator: (rule, value, callback) => {
              if (value === this.registerForm.pass) {
                callback();
              } else {
                callback("两次输入密码不一致");
              }
            },
            required: true,
            trigger: "blur",
          },
        ],
      },
      registerForm: {
        user: "",
        pass: "",
        pass2: "",
      },
      loading: false
    };
  },
  created() {
    this.isLogin = true
  },
  methods: {
    //vuex
    ...mapMutations(["login"]),

    //登陆
    loginSubmit(form) {
      this.$refs[form].validate(async (valid, err) => {
        console.log(valid, err, "eeeeeee")
        if (!valid) return
        this.loading = true
        //验证通过
        let { data } = await this.$axios({
          method: "post",
          url: "/login",
          data: {
            user: this.loginForm.user,
            pass: this.loginForm.pass,
          },
        });
        console.log(data, "uiui")

        //登陆失败
        if (data.code !== 0) {
          this.loading = false
          this.$message({
            type: "error",
            duration: 1500,
            message: data.msg,
          });
          return
        }

        //登陆成功
        this.$message({
          type: "success",
          duration: 1500,
          message: "登陆成功",
        });
        this.handleClose();
        //更新vuex的数据
        this.login(data.data);
        setTimeout(() => {
          this.loading = false
        }, 500)
      });
    },

    //注册
    registerSubmit(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          //验证通过
          let { data } = await this.$axios({
            method: "POST",
            url: "/reg",
            data: {
              user: this.registerForm.user,
              pass: this.registerForm.pass,
            },
          });

          //注册失败
          if (data.code !== 0) {
            //给用户一个提示
            return this.$message.error(data.msg);
          }

          //注册成功
          //清空当前的表单内容
          this.$refs[form].resetFields();
          //跳转到登录选项弹窗
          this.activeName = "login";
          //给用户一个成功的提示
          this.$message.success("注册账号成功");
          this.isLogin = true
        } else {
          //验证不通过
          return false;
        }
      });
    },

    //弹窗关闭
    handleClose() {
      this.isLogin = true
      this.$emit("close");
    },
    change(bool) {
      this.isLogin = bool;
    },
  },
};
</script>

<style scoped lang="less">
#Login {
  .login-box {
    animation: loginAnimation 1s;
  }
  @keyframes loginAnimation {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }

    100% {
      /* transform: translateX(0px); */
      opacity: 1;
    }
  }

  .register-box {
    animation: registerAnimation 1s linear;
  }
  @keyframes registerAnimation {
    0% {
      transform: translateX(200px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .content {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25%;
    padding: 0 15px;
    background-color: rgba(12, 22, 34, 0.8);
    border-radius: 10px;
    box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.6);
    // opacity: 0.8;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    color: white;
    .header_container {
      display: flex;
      padding: 20px 0;
      justify-content: center;
      align-items: center;
      width: 200px;
      h2 {
        cursor: pointer;
      }
      h2:nth-child(2) {
        padding: 0 10px;
      }
    }
    /deep/.el-form-item__content {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: rgb(130, 129, 129);
    font-size: 16px;
    cursor: pointer;
    user-select: none;

    &:hover {
      color: #555;
    }
  }
  .form {
    .el_form-btn {
      width: 100%;
      cursor: pointer;
      // opacity: 0.7;
      border: none;
    }
  }
  /deep/.el-form-item__label {
    color: white;
    font-size: 16px;
  }
  /deep/.el-input__inner {
    border: none;
    color: #fff;
  }
  /deep/.el-input__inner {
    border-bottom: 1px solid white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #0c1622;
  }
}
/deep/ .btn_login {
  padding: 10px 50px;
  color: #03e9f4;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
}
/deep/.btn_login {
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}
/deep/.btn_login:hover {
  border-radius: 5px;
  color: #fff;
  background: #000;

  box-shadow: 0 0 5px 0 #03e9f4, 0 0 25px 0 #03e9f4, 0 0 50px 0 #03e9f4,
    0 0 100px 0 #03e9f4;
  transition: all 500ms linear;
}
/deep/.btn_login {
  div {
    position: absolute;
  }
}

/deep/.btn_login {
  div:nth-child(1) {
    width: 100%;
    height: 2px;
    background: -webkit-linear-gradient(left, transparent, #03e9f4);
    left: -100%;
    top: 0px;
    animation: line1 1s linear infinite;
  }
}

@keyframes line1 {
  50%,
  100% {
    left: 100%;
  }
}

/deep/.btn_login {
  div:nth-child(2) {
    width: 2px;
    height: 100%;
    background: -webkit-linear-gradient(top, transparent, #03e9f4);
    right: 0px;
    top: -100%;
    animation: line2 1s 0.25s linear infinite;
  }
}

@keyframes line2 {
  50%,
  100% {
    top: 100%;
  }
}

/deep/.btn_login {
  div:nth-child(3) {
    width: 100%;
    height: 2px;
    background: -webkit-linear-gradient(left, #03e9f4, transparent);
    left: 100%;
    bottom: 0px;
    animation: line3 1s 0.75s linear infinite;
  }
}

@keyframes line3 {
  50%,
  100% {
    left: -100%;
  }
}

/deep/.btn_login {
  div:nth-child(4) {
    width: 2px;
    height: 100%;
    background: -webkit-linear-gradient(top, transparent, #03e9f4);
    left: 0px;
    top: 100%;
    animation: line4 1s 1s linear infinite;
  }
}

@keyframes line4 {
  50%,
  100% {
    top: -100%;
  }
}
</style>














