import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoApp from '@/components/TodoApp'
import Home from '@/components/Home'
import Intro from '@/components/Introduce'

Vue.use(Router)

export default new Router({
  mode: 'history',
  exact: true,
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'TodoApp',
      component: TodoApp
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '*',
      name: 'NotFound',
      component: {
        template: '<div>Not Found</div>'
      }
    },
  ]
})
