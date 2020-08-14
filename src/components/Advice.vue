<template>
  <div>
    <transition name="loading">
      <app-loading v-if="isLoading"></app-loading>
    </transition>
    <template v-if="!isLoading">
      <div id="heading">
        <h2 class="animate__animated animate__zoomIn heading">Advice For You</h2>
      </div>
      <div class="advice-card">
        <h1 id="advice-text" class="animate__animated animate__pulse">{{ advices['advice'] }}</h1>
        <button @click="refresh" class="btn btn-success btn-md"><span class="glyphicon glyphicon-refresh"></span></button>
      </div>
    </template>
  </div>
</template>
<script>
import Loading from './Loading'
import {eventBus} from "../main";

export default {
  data() {
    return {
      advices: [],
      isLoading: true
    }
  },
  components: {
    appLoading: Loading
  }
  ,
  methods: {
    refresh(){
      eventBus.$emit('hideIt', false );
      this.isLoading = true
      setTimeout(()=>{
        this.$http.get('https://api.adviceslip.com/advice').then((data) => {
          this.isLoading = false
          this.advices = data.body.slip;
          eventBus.$emit('showIt', true );
        })
      }  ,1000)

    }
  },
  created() {
    this.$http.get('https://api.adviceslip.com/advice').then((data) => {
      this.isLoading = false
      this.advices = data.body.slip;
      eventBus.$emit('showIt', true )
    })
  }
}
</script>
<style>
#heading {
  margin-left: auto;
  text-align: center;
  background: #7F7FD5; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px;
  color: white;
}
.loading-enter{
  opacity: 0;
}
.loading-enter-active{
  transition: 1s;
}
.loading-leave{

}
.loading-leave-active {
  transition: 1s;
  opacity: 0;
}
.advice-card {
  border-radius: 10px;
  width: 60%;
  margin: 10% auto;
  text-align: center;
  background: #4e54c8; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8f94fb, #4e54c8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  padding: 20px;
  flex-direction: column;
  align-items: center;
}
#advice-text{
  margin-top: auto;
  font-size: 40px;
  font-family: 'Dancing Script', cursive;
}

</style>
