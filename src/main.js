// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

// 루트의 모든 하위 커모넌트에 주입
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recentItem: ''
  },
  mutations: {
    updateRecentItem(state, item) {
      state.recentItem = item;
    }
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,  // Vuex store
  router,
  components: { App },
  template: '<App/>'
})

