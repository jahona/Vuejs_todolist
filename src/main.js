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
    recentItem: '',
    count: 0
  },
  mutations: {
    updateRecentItem(state, item) {
      state.recentItem = item;
    },
    syncPrint_test(state, ref) {
      state.count++;
      console.log('[%s] syncPrint_test func is called from [%s]', String(state.count), ref);
    }
  },
  actions: {
    logging_middle({ commit }, data) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.commit('syncPrint_test', data + '-> logging_middle action');
          resolve();
        }, 1000)
      })
    },
    logging({ dispatch, commit, state }, data) {
      setTimeout(() => {
        // commit('syncPrint_test', 'logging actions');

        dispatch('logging_middle', 'logging action')
        .then(() => {
          commit('syncPrint_test', 'logging actions');
        })
      }, 2000);  
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

