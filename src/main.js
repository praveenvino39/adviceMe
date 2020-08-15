import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Animate from 'animate.css'
import Router from './routes'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: Router
})


export const eventBus = new Vue()
Vue.use(Animate)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
