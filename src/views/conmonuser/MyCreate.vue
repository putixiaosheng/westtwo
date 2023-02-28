<template>
    <el-row>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="8">
        <el-form  label-width="80px" ref="kfFormRef">
        <el-form-item label="名称">
            <el-input v-model="p_name"></el-input>
        </el-form-item>
        <el-form-item label="介绍">
            <el-input v-model="introduce"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <input style="width: 100%;height: 100%; cursor: pointer;" @change="getimgList($event)" ref="upload"
                         type="file" multiple="multiple" accept="image/*"/>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form>
    </el-col>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </template>
  
  <script>
  import axios from 'axios' 
  export default {
      name:'MyCreate',
      data() {
      return {
          p_name: '', 
          introduce: '',
          file:'',
      };
    },
    methods:{
      getimgList(event) {
        let file = event.target.files;
        this.file = file[0]
        console.log(file[0])
      },
        onSubmit(){
                alert('submit!');
                let param = new FormData();
                param.append("pname", this.p_name);
                param.append("info", this.introduce);
                param.append("file", this.file);
                console.log(param)
                axios({
                url: "http://39.108.145.195:3000/api/v1/project",
                method: "post",
                data: param,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization":localStorage.getItem("token")
                }
            })
            },
        },
    }
  </script>
  
  <style>
  
  .el-row {
    margin-bottom: 20px;
    display: flex;
  }
  .el-col {
    border-radius: 4px;
  }
  .el-form{
    align-items: center;
  }
  .el-button{
    align-items: center;
  }
  </style>