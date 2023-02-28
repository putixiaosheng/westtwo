<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="p_name"
        label="项目名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="info"
        label="项目详情"
        width="180">
      </el-table-column>
      <el-table-column
        label="是否通过"
        width="320">
        <template slot-scope="scope">
        <el-button type="primary" @click="projectpass(scope.row)">通过</el-button>
        <el-button type="danger" @click="projectreject(scope.row)">不通过</el-button>
      </template>
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-pagination
      small
      @prev-click="prechange()"
      @next-click="afchange()"
      page-size:5
      layout="prev, next"
      :total="total">
</el-pagination>
  </div>
</template>

<script>
// 在 vue组件中引入
import qs from 'qs'
export default {
    name:'Audit',
    data(){
      return {
        page:1,
        total:50,
        list:[

        ],
        tableData:[],
      }
    },
    methods:{
      getList(){
        this.$axios.get('/admin/audit?page='+(this.page)).then(res => {
          this.tableData = res.data.data.data.item
          })
      },
      handleClick(row) {
        this.$bus.$emit('detail1',row.Pid)
        this.$router.push("/detail")
      },
      prechange(){
        this.$axios.get('/admin/audit?page='+ --this.page).then(res => {
          this.tableData = res.data.data.data.item
          })
      },
      afchange(){
        this.$axios.get('/admin/audit?page='+ ++this.page).then(res => {
          this.tableData = res.data.data.data.item
          })
      },
      projectpass(row){
        let form = {
          pid:row.Pid,
          isPass:true
        }
        console.log(form)
        this.$axios.post('/admin/audit?pid='+form.pid+'&isPass=yes').then(res=>{
          this.$router.go(0)
          alert('操作成功')
        })
        console.log(row)
      },
      projectreject(row){
        let form = {
          pid:row.Pid,
          isPass:true
        }
        console.log(form)
        this.$axios.post('/admin/audit/?pid='+form.pid+'&isPass=no').then(res=>{
          this.$router.go(0)
          alert('操作成功')
        })
        console.log(row)
      },
  },
  created(){  
      this.getList()
    },
}
</script>

<style>

</style>