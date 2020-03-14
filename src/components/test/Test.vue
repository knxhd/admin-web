<template>
  <div>
   <h1>{{name}}</h1>
    <button @click="change">父传子-数据-props</button>
    <button @click="fTocFunction">父传子-函数-props</button>
    <button @click="emitFunction">父传子-函数-emit</button>
  </div>
</template>

<script>
    export default {
        props: {
          name : String,
          fTocFunction: {
            type: Function
          }
        },
        methods: {
          change() {
            this.name++;
          },
          show(params1) {
            this.$message("12344"+params1);
          },
          emitFunction() {
             this.$emit("emitFun",this.name)
          }
        },
      mounted() {

      }
    }
</script>

<style scoped>

</style>
