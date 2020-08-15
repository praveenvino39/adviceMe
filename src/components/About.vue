<template>
  <div class="advice-card">
    <h1 id="advice-text" class="animate__animated animate__pulse">A Fun project created by Pv4you.</h1>
    <router-link to="/"><button class="btn btn-success">Back to Home</button></router-link>
    <div class="fixed-bottom"><h5 class="text-white">Copyright © 2020 Pv4you. All Rights Reserved</h5></div>
  </div>
</template>
<style>
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
#advice-text {
  margin-top: auto;
  font-size: 40px;
  font-family: 'Dancing Script', cursive;
}
</style>
