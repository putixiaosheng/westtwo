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
      label="状态"
      width="180">
      未通过
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
</div>
</template>

<script>
export default {
  name:'AllProject',
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
},
created(){  
  this.$axios.get('/user/audit').then(res => {
        this.tableData = res.data.data.data.item
        console.log(this.tableData[0])
        })
  },
}
</script>

<style>

</style>