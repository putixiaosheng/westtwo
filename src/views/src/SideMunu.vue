<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="0">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
    </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <router-link to="/audit">
            <el-menu-item index="1-1">
            审核项目
        </el-menu-item>
        </router-link>
        <router-link to="/sys/role">
            <el-menu-item index="1-2">
            角色管理
        </el-menu-item>
        </router-link>
        <router-link to="/sys/menu">
            <el-menu-item index="1-3">
            菜单管理
        </el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>系统工具</span>
        </template>
        <el-menu-item index="2-1">数字字典</el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {

}
</script>

<style>
.el-menu-vertical-demo{
    height: 100vh;
  }
</style>