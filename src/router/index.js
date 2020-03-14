import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Test from "@/components/test/Test1";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/test',
      name:'test',
      component: Test
    }
  ]
})
