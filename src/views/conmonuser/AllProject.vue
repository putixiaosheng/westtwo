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
        label="捐赠"
        width="320">
        <template slot-scope="scope">
        <el-input v-model="scope.row.pay" @blur.native.capture="juanzeng(scope.row)"></el-input>
    </template>
      </el-table-column>
      <el-table-column
      fixed="right"
      label="目前已集资"
      width="100">
      <template slot-scope="scope">
      <div>{{ scope.row.Accumulate }}</div>
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
        juanzeng(row){
            console.log(row.pay)
            let mynumber = +(row.pay)
            let form = {
                pid:row.Pid,
                money:mynumber
            }
            this.$axios.post('/order',form).then(res => {
                console.log(res.data.data)
                let form2 = {
                    orderid:res.data.data.ID,
                    money:res.data.data.money
                }
                alert('订单提交成功，请进入我的订单中确认订单')
                this.$router.go(0)
                /* this.$axios.post('/user/pay',form2).then(res => {
                  alert('捐赠成功')
                    this.$router.go(0)
            }) */
          })
        },
  },
  created(){  
    this.$axios.get('/project').then(res => {
        console.log(res.data.data)
          this.tableData = res.data.data.data.item
          console.log(this.tableData[0])
          })
    },
}
</script>

<style>

</style>