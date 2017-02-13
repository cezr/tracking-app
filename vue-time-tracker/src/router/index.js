import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Hello from 'components/Hello'
import Home from 'components/Home'
import TimeEntries from 'components/TimeEntries'
// import LogTime from 'components/LogTime'

Vue.use(VueRouter)
Vue.use(VueResource)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    // {
    //  path: '*',
    //  redirect: '/hello'
    // },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/time-entries',
      component: TimeEntries,
      children: [
        { // Log Time will be rendered inside Time Entry <router-view>
          path: 'log-time'
          // component: LogTime
        }
      ]
    }
  ]
})
