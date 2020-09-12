import Vue from 'vue'
import Vuex from 'vuex'
import todoItem from './modules/todoItem'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    todoItem
  },
  strict: debug,
  //plugins: debug ? [createLogger()] : []
})