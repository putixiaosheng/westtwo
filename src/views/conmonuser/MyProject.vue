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
  export default {
      name:'MyProject',
  
  }
  </script>
  
  <style>
  
  </style>