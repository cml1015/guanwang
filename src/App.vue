<template>
  <div id="app">
    <Headers></Headers>
    <router-view></router-view>
  </div>
</template>

<script>
  //注意路径前面要写./
  import Headers from "./components/header/Headers.vue"
  export default {
    name: 'App',
    components:{
      Headers
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style:none;
    box-sizing:border-box;
  }
  #app {
    font-family:"微软雅黑";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
