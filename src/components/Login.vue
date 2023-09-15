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
      @click.stop
    >
      <el-tabs
        v-model="activeName"
        class="tabs"
      >
        <el-tab-pane
          label="立即登陆"
          name="login"
        >
          <el-form
            :model="loginForm"
            status-icon
            :rules="rules"
            ref="loginForm"
            class="form"
            label-width="70px"
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
              label="密码"
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
                type="primary"
                class="el_form-btn"
                @click="loginSubmit('loginForm')"
              >登陆</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="注册账号"
          name="register"
        >
          <el-form
            :model="registerForm"
            status-icon
            :rules="rules"
            ref="registerForm"
            label-width="80px"
            class="form"
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
              label="密码"
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
              label="确认密码"
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
                type="primary"
                class="el_form-btn"
                @click="registerSubmit('registerForm')"
              >注册</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>

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
  methods: {
    //vuex
    ...mapMutations(["login"]),

    //登陆
    loginSubmit(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
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
          this.loading = false
          this.handleClose();
          //更新vuex的数据
          this.login(data.data);
        } else {
          //验证不通过
          this.loading = false
          return false;
        }
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
        } else {
          //验证不通过
          return false;
        }
      });
    },

    //弹窗关闭
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="less">
#Login {
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
    width: 50%;
    padding: 0 15px;
    // background-color: rgba(194, 247, 250, 0.9);
    background-image: linear-gradient(
      to right,
      rgba(50, 185, 193, 0.9),
      rgba(194, 247, 250, 0.9),
      rgba(50, 185, 193, 0.9),
      rgba(194, 247, 250, 0.9),
      rgba(50, 185, 193, 0.9)
    );
    border-radius: 10px;
    transform: translate(-50%, -50%);
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
      opacity: 0.7;
      border: none;
    }
    .el-input {
      opacity: 0.7;
    }
  }
}
</style>














