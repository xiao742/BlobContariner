<template>
  <article
    class="contact"
    id="contact"
  >
    <h2>CONTACT ME</h2>
    <p class="des">有任何问题请联系我吧，收到消息后会给您回复邮件的哦♪(^∇^*)</p>
    <el-form
      :model="ruleForm"
      :rules="rules"
      status-icon
      ref="contactForm"
      class="demo-ruleForm"
    >
      <el-form-item
        label="Your Name"
        prop="name"
      >
        <el-input
          type="text"
          v-model="ruleForm.name"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="Your Email"
        prop="email"
      >
        <el-input
          type="text"
          v-model="ruleForm.email"
        ></el-input>
      </el-form-item>
      <el-form-item
        prop="subject"
        label="Subject"
      >
        <el-input
          type="text"
          v-model="ruleForm.subject"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="Your Message"
        prop="message"
      >
        <el-input
          type="text"
          v-model="ruleForm.message"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleContactSubmit"
        >Send
          <i class="el-icon-s-promotion"></i>
        </el-button>
      </el-form-item>
    </el-form>
  </article>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      ruleForm: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      rules: {
        name: [
          { required: true, trigger: "blur" }
        ],

        email: [
          { type: "email", required: true, trigger: "blur" }
        ],
        subject: [
          { required: true, trigger: "blur" }
        ],
        message: [
          { required: true, trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    handleContactSubmit() {
      //验证表单的所有数据是否准确
      this.$refs.contactForm.validate(async vaild => {
        if (vaild) {
          console.log(vaild, "vaild")
          //通过所有数据的验证
          console.log("发送请求给后端")
          //验证通过
          let { data } = await this.$axios({
            method: "post",
            url: "/visit/send",
            data: {
              name: this.ruleForm.name,
              email: this.ruleForm.email,
              subject: this.ruleForm.subject,
              message: this.ruleForm.message,
            },
          });
          console.log(data, "data")
          if (data.code === 0) {
            this.$message({
              type: "success",
              duration: 1500,
              message: data.msg,
            });
          } else {
            this.$message({
              type: "error",
              duration: 1500,
              message: data.msg,
            });
          }
        } else {
          //验证不通过
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.el-form {
  padding: 0 40px;

  .el-button {
    display: block;
    width: 100px;
    height: 40px;
    margin-top: 35px;
    border: 0;
    border-radius: 20px;
    box-shadow: 0 0 0 #bbb;
    background-color: #bfe2e6;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 2px;
    font-family: "Quicksand", "sans-serif";
    color: #000;
    outline: 0;
    cursor: pointer;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 3px 5px #bbb;
    }
  }
}
</style>


<!--/*{
validator(rule, value, callback){
let reg = /^\w+@[\da-z]+(\.[a-z]{2,})+$/i
if (reg.test(value)){
//满足规则
callback()
}else{
//不满足规则
callback(new Error("邮箱不满足匹配规则"))
}
},
trigger: "blur"
}*/-->





