import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from "./store/index.js";

Vue.config.productionTip = false;
Vue.prototype.$http = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }

});
Vue.use(ElementUi);
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
