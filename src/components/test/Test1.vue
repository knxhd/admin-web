<template>
  <div>
    <test :name="name1" ref="test" :f-toc-function="fTocFunction1" @emitFun="emitFunction">

    </test>
    <hr/>
    <button @click="show">父组件按钮</button>
    <button @click="changeTestString">改变testString</button>
    <h1>{{$store.state.test.testString}}</h1>

  </div>
</template>

<script>
  import Test from '@/components/test/Test'
  import { mapMutations, mapActions, mapState } from 'vuex';
  export default {
    name: "Test1",
    components: {
      Test
    },
    data() {
      return {
        name1:"11111"
      }
    },
    computed: {
      ...mapState('test',['testString'])
    },
    methods: {
      ...mapActions('test', ['testStringAction']),
      ...mapMutations('test',['testStringMutations']),
      show() {
        this.$refs.test.show("父组件");
      },
      changeTestString() {
        this.testStringMutations("1234");
        this.$message.error(this.testString);
      },
      fTocFunction1() {
        this.$message("父传子函数");
        this.name1++;
      },
      emitFunction(val) {
        this.$message("父传子-函数-emit-"+val);
      }
    }
  }
</script>

<style scoped>

</style>
