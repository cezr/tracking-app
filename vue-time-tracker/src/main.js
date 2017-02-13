// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
*/

// time tracking app setup

import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// Pointing routes to the components they should use
router.map({
  '/hello': {
    component: Hello
  }
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/hello'
})

router.start(App, '#app')
