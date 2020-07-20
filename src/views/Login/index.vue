<template>
  <el-container>
    <el-form :model="param" :rules="rules" ref="login" label-width="0px">
      <h2 class="login-title">后台管理系统</h2>
      <el-form-item prop="username">
        <el-input v-model="param.username" placeholder="username">
          <el-button slot="prepend" icon="el-icon-user"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="password"
          v-model="param.password"
          @keyup.enter.native="submitForm()"
        >
          <el-button slot="prepend" icon="el-icon-link"></el-button>
        </el-input>
      </el-form-item>
      <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
      </div>
      <p class="login-tips">Tips : 用户名和密码随便填。</p>
    </el-form>
  </el-container>
</template>

<style scoped>
.el-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #f0f9eb;

  display: flex;
  align-items: center;
  justify-content: center;
}
.el-form {
  width: 400px;
  height: 300px;
  background: rgba(255,255,255,.8)
}
.login-title {
  text-align: center;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>

<script>
export default {
  data() {
    return {
      param: {
          username: 'admin',
          password: '123123',
      },
      rules: {
          username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      }
    }
  },
  methods: {
      submitForm() {
          this.$refs.login.validate(valid => {
              if (valid) {
                  this.$message.success('登录成功');
                  localStorage.setItem('ms_username', this.param.username);
                  this.$router.push('/home');
              } else {
                  this.$message.error('请输入账号和密码');
                  console.log('error submit!!');
                  return false;
              }
          });
      },
  },
};
</script>