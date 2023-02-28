<template>
  <div>
<el-row>
  <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12">
    <el-descriptions title="项目详情" :column="2" size="medium" border>
  <el-descriptions-item label="项目名称" label-class-name="my-label">{{ pname}}</el-descriptions-item>
  <el-descriptions-item label="项目详情">{{ info }}</el-descriptions-item>
  <el-descriptions-item label="附件" :contentStyle="{'text-align': 'right'}">{{}}</el-descriptions-item>
  <el-descriptions-item label="是否通过">
    <el-button type="primary" @click="pass()">通过</el-button>
    <el-button type="danger" @click="reject()">不通过</el-button>
  </el-descriptions-item>
</el-descriptions>
  </el-col>
  <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
</el-row>
  </div>
</template>

<script>
// 在 vue组件中引入
export default {
    name:'Detail',
    data(){
      return {
          pname:'',
          info:'',
            pid:'',
            isPass:true,
      }
    },
    methods:{
      /* djsakljdl() {
        bus.$on('detail1', data=>{
        // this.dd = data
        let s = '/admin/audit/'+data
        this.$axios.get(s).then(res => {
          this.project.pname = res.data.data.pname
          this.project.info = res.data.data.info
          console.log(res.data.data)
          console.log(this.project.pname)
						})
      })
      // this.getinfo()
      }, */
      pass(){
        bus.$on('detail1', data=>{
        // this.dd = data
        this.form.pid = data
        this.$axios.post('/admin/audit',(this.form)).then(res => {
          alert('操作成功')
          
						})
      })
      }
    },
    beforecreate(){
      this.$bus.on('detail1', (data)=>{
        // this.dd = data
        this.$bus.data = data
        console.log(this.$bus.data )
      })
    },
    mounted(){
      this.pid = this.$bus.data
      this.$axios.get('/admin/audit/'+this.pid).then(res => {
        this.pname = res.data.data.pname
        this.info = res.data.data.info
						})
    },
    created(){
      this.$bus.$on('detail1', (data)=>{
        // this.dd = data
        let s = '/admin/audit/'+data
        this.$axios.get(s).then(res => {
          this.pname = res.data.data.pname
          this.info = res.data.data.info
            
						})
      })
    },
    beforeDestroy(){
      this.$bus.$off('detail1')
    }
    // beforeDestroy() {
    //   bus.$off('detail');
    // }
}
</script>

<style>
.el-row{
    background-color: #fafafa;
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .el-col{
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .my-label {
    background: #E1F3D8;
  }

  .my-content {
    background: #FDE2E2;
  }
</style>