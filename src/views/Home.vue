<template>
   <el-container>
  <el-aside width="200px">
    <SideMunu></SideMunu>
  </el-aside>
  <el-container>
    <el-header>
        <strong>后台管理系统</strong>
        <div class="header-avater"> 
            <el-avatar :src="userinfo.avatar"></el-avatar>
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{userinfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <router-link to="/usercenter">个人中心</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
// @ is an alias to /src
import SideMunu from './src/SideMunu.vue'
export default {
  name: 'Home',
  components:{SideMunu},
  data(){
    return {
      userinfo:{
        id:'',
        username:'',
        avatar:'',
      }
    }
  },
  created(){
    this.getUserInfo()
  },
  methods:{
    getUserInfo(){
      this.$axios.get('/user').then(res=>{
        this.userinfo = res.data.data
        console.log(this.userinfo)
      })
    },
    logout(){
        localStorage.clear()
        sessionStorage.clear()
        this.$store.commit("resetState")
        this.$router.push('/login')
    }
  }
}
</script>
<style>
.header-avater{
    float: right;
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.el-container{
    padding:0;
    margin: 0;
    height: 100vh;
}
.el-header, .el-footer {
    background-color: #17B3A3;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: white
  }
</style>
