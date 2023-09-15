<template>
  <div id="AdminLinkAdd">
    <h3>添加友链</h3>
    <el-form ref="linkForm" :model="form" :rules="rules" class="form">
      <el-form-item prop="src" label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="链接">
        <el-input v-model="form.src"></el-input>
      </el-form-item>
      <el-form-item prop="icon" label="图标链接">
        <el-input v-model="form.icon"></el-input>
      </el-form-item>
      <el-form-item prop="des" label="描述">
        <el-input v-model="form.des"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit('linkForm')"
          >添加发起</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AdminLinkAdd",
  data() {
    return {
      form: {
        src: "",
        name: "",
        icon: "",
        des: "",
      },
      rules: {
        src: [
          {
            required: true,
            trigger: "blur",
            message: "请输入友联名称",
          },
        ],
        name: [
          {
            required: true,
            trigger: "blur",
            message: "请输入友联链接",
          },
        ],
        icon: [
          {
            required: true,
            trigger: "blur",
            message: "请输入图标链接",
          },
        ],
        des: [
          {
            required: true,
            trigger: "blur",
            message: "请输入描述",
          },
        ],
      },
    };
  },
  methods: {
    async handleSubmit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) {
          return;
        }
        let { data } = await this.$axios({
          method: "post",
          url: "/admin/addLink",
          data: {
            src: this.form.src,
            icon: this.form.icon,
            name: this.form.name,
            des: this.form.des,
          },
        });

        if (data.code !== 0) return;

        this.$message.success("添加成功");
        this.$router.push("/link");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.form {
  .el-button {
    width: 100%;
  }
}
</style>














