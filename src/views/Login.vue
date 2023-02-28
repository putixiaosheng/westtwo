<template>
  <el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6">
    <h1>标题</h1>
    <h2>网站名称</h2>
  </el-col>
  <el-col :span="1">
    <el-divider direction="vertical"></el-divider>
  </el-col>
  <el-col :span="6">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
  <el-form-item label="用户名" prop="username" style="width:380px">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password" style="width:380px">
    <el-input v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('form')">登录</el-button>
    <el-button type="primary" @click="register()">注册</el-button>
  </el-form-item>
</el-form>
  </el-col>
</el-row>
</template>

<script>
export default {
 name:'login',
 data() {
      return {
        form: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        },
        capimg:null
      };
    },
    methods: {
      submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$axios.post('/login',(this.form)).then(res => {
                if(res.data.status === 200){
                  localStorage.setItem("token",res.data.data.token)
                  if(res.data.data.user.isadmin === true){
                    this.$router.push("/home")
                  }else{
                    this.$router.push("/myall")
                  }
                }else{
                  this.$message.error("登陆失败,账号密码错误")
                  this.$router.push("/login")
                }
						})

					} else {  
						console.log('error submit!!');
						return false;
					}
				});
			},
      register(){
      this.$router.push('/register')
    },
    },
  }
</script>
  
<style scoped>
  .el-row{
    background-color: #fafafa;
    height: 100vh;
    display: flex;
    align-items:center;
    text-align: center;
    justify-content: center;
  }
  .el-divider{
    height: 200px;
  }
  .code{
    float: left;
    margin-left: 8px;
  }
</style>