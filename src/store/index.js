import Vue from 'vue';
import Vuex from 'vuex';

import state from './test/state';
import getters from './test/getter';
import mutations from './test/mutations';
import actions from './test/actions';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
      test: {
        namespaced:true,
        state,
        getters,
        mutations,
        actions
      }
  }
});
export default store;
