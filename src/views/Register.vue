<template>
  <el-row type="flex">
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
    <el-input v-model.number="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model.number="ruleForm.email"></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="phone">
    <el-input v-model.number="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm">提交</el-button>
  </el-form-item>
</el-form>
  </el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
</template>

<script>
export default {
    name:'register',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username:'',
          phone:'',
          email:'',
          password: '',
          checkPass: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone:[
           { required: true, message: '请输入电话号码', trigger: 'blur' },
          ],
          email:[
           { required: true, message: '请输入邮箱', trigger: 'blur' },
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm() {
        let form = {
          username:this.ruleForm.username,
          phone:this.ruleForm.phone,
          password:this.ruleForm.password,
          email:this.ruleForm.email,
        }
            this.$axios.post('/register',(form)).then(res => {
                if(res.data.status === 200){
                    this.$router.push("/login")
                }else{
                  this.$message.error("注册失败")
                  this.$router.push("/register")
                }
						})
          }
      },
    }
</script>

<style>
    .el-row{
    background-color: #fafafa;
    height: 100vh;
    display: flex;
    align-items:center;
    text-align: center;
    justify-content: center;
  }
</style>