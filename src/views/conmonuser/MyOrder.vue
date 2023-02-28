<template>
    <div>
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="ID"
        label="订单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Money"
        label="订单金额"
        width="180">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="是否支付"
        width="320">
        <template slot-scope="scope">
        <el-button type="primary" @click="orderpass(scope.row)">支付</el-button>
        <el-button type="danger" @click="orderreject(scope.row)">取消</el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
  </template>
  
  <script>
  export default {
    name:'MyOrder',
    data(){
      return {
        page:1,
        total:50,
        list:[
  
        ],
        form:{
          orderid:'',
          money:'',
        },
        tableData:[],
      }
    },
    methods:{
      orderpass(row){
        this.form.orderid = row.ID
        this.form.money = row.Money
        this.$axios.post('/user/pay',this.form).then(res => {
                  alert('订单支付成功')
                  this.$router.go(0)
            })
      },
      orderreject(row){
        let reform = {
          orderid:row.ID
        }
        console.log(typeof reform.orderid)
        this.$axios.delete('/order',{orderid:row.ID}).then(res => {
                  alert('订单取消成功')
                  /* this.$router.go(0) */
            })
      }
  },
  created(){  
    this.$axios.get('/order').then(res => {
          this.tableData = res.data.data.data.item
          })
    },
  }
  </script>
  
  <style>
  
  </style>