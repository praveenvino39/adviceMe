import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Animate from 'animate.css'



export const eventBus = new Vue()
Vue.use(Animate)
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
