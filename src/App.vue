<template>
  <div>
    <router-view></router-view>
    <div v-if="showFooter" class="fixed-bottom"><h5 class="text-white">Copyright © 2020 Pv4you. All Rights Reserved</h5>        <router-link to="/about"><button class="btn btn-primary btn-sm fixed-left">About</button></router-link></div>
  </div>
</template>
<script>
import Advice from './components/Advice'
import {eventBus} from "./main";
  export default {
    data(){
      return {
        showFooter: false
      }
    },
    components: {
      appAdvice: Advice,
    },
    created() {
      eventBus.$on('showIt',(data)=> {
        this.showFooter = data
      })
      eventBus.$on('hideIt',(data)=> {
        this.showFooter = data
      })
    },
  }
</script>
<style>
.fixed-bottom{
  text-align: center;
  background-color: black;
  padding: 10px;
}
</style>
