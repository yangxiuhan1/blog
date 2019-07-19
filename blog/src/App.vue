<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view class="main-screen"/>
  </div>
</template>

<script>
import utils from './common/js/utils.js'
window.onresize = () => {
    utils.getRem()
}
export default {
    name: 'App',
    created () {
        utils.getRem()
    }
}
</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // margin-top: 60px;
    padding: 0;
    margin: 0;
}
.main-screen {
    height: 100%;
}
</style>
