<template>
<div>
    <common-table :table-data="data" :cols="cols">

    </common-table>
</div>
</template>

<script>
  import CommonTable from "@/components/common/CommonTable";
    export default {
        name: "TestTable",
      components:{
          CommonTable
      },
      data(){
          return {
            data: [{
              id:1,
              age:12,
              name:"张三"
            },{
              id:2,
              age:13,
              name:"张三"
            },{
              id:3,
              age:14,
              name:"张三"
            },{
              id:4,
              age:15,
              name:"张三"
            },{
              id:5,
              age:16,
              name:"张三"
            },{
              id:6,
              age:17,
              name:"张三"
            },],
            cols:[{
              field:"id",
              value:"id"
            },{
              field:"age",
              value:"年龄"
            },{
              field:"name",
              value:"姓名"
            }]
          }
      }
    }
</script>

<style scoped>

</style>
