<template>
     <div>
       <el-table :data="tableData">
         <el-table-column
           :prop="item.field"
           :label="item.value"
           :key="item.id"
           width="180" v-for="item in cols">
         </el-table-column>
       </el-table>
     </div>
</template>

<script>
    export default {
        name: "CommonTable",
      props:{
          tableData:Array,
          cols:Array
      }
    }
</script>

<style scoped>

</style>
