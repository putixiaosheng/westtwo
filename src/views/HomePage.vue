<template>
  <el-container>
  <el-header>
    <div class="header-avater"> 
            <el-avatar :src="UserInfo.avatar"></el-avatar>
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{UserInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item >
                      <router-link to="/allproject">首页</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item >
                      <router-link to="/myall">我的项目</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item >
                      <router-link to="/myorder">我的订单</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item >
                      <router-link to="/mycreate">创建项目</router-link>
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
</template>

<script>
export default {
    name:'homepage',
    data(){
    return {
      UserInfo:{
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
        this.UserInfo = res.data.data
        console.log(this.UserInfo)
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
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  a{
    text-decoration: none;
    color: black;
  }
</style>