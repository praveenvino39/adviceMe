<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>

</script>
<style>
.loading {
  font-family: sans-serif;
  font-weight: 200;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
}
.loading span {
  position: absolute;
  top: 50%;
  left: 50%;
  content: '';
  height: 20px;
  width: 20px;
  border: #FFF 3px solid;
  border-radius: 50%;
  -webkit-animation: loading 1.5s infinite;
  -webkit-animation-delay: 250ms;
  -webkit-transform: scale(0.6);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: -10px 0 0 -10px;
}
.loading span:first-child {
  margin: -10px 0 0 -35px;
}
.loading span:last-child {
  margin: -10px 0 0 15px;
  -webkit-animation-delay: 500ms;
}
.loading:after {
  position: absolute;
  top: 50%;
  left: 50%;
  content: 'Great things takes time!';
  height: 20px;
  width: 100px;
  margin: 20px 0 0 -50px;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
}

@-webkit-keyframes loading {
  0% {
    -webkit-transform: scale(0.6);
  }
  50% {
    -webkit-transform: scale(0.8);
  }
  100% {
    -webkit-transform: scale(0.6);
  }
}

</style>
