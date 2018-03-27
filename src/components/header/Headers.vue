<template>
  <div class="headers">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header img">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <img src="../../../static/images/logo.png" alt="">
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><router-link to='/Fullpage' class="link">首页</router-link></li>
            <li><router-link to='/Democenter' class="link">演示中心</router-link></li>
            <li><router-link to="/Productpresentation" class="link">产品介绍</router-link></li>
            <li><router-link to="/Industryapplication" class="link">行业应用</router-link></li>
            <li><router-link to="/Government" class="link">政府应用</router-link></li>
            <li><router-link to="/Aboutus" class="link">关于我们</router-link></li>
            <li><router-link to="/Joinus" class="link">加入我们</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
  export default {
    name: 'headers'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body,html{
    width:100%;
    height:100%;
    background: #fff;
  }
  .headers{
    width:100%;
    height:85px;
    line-height:85px;
    background:#fff;
  }
  .navbar{
    height:85px;
    line-height:85px;
    margin-bottom:0px;
    box-shadow:0px 1px 15px #9a9a9a;
  }
  .navbar .container{
    height:100%;
  }
  .navbar-collapse{
    height:100%!important;
  }
  .navbar-default{
    border:0;
    background:#fff;
  }
  .navbar-nav{
    height:85px;
    margin-left:150px;
  }
  .navbar-nav > li {
    height:85px;
    line-height:85px;
    position:relative;
  }
  .navbar-nav li:hover:after{
    content:"";
    width:100%;
    height:4px;
    background:#3578c0;
    position:absolute;
    bottom:0;
    left:0;
  }
  .navbar-nav > li > a{
    display:inline-block;
    width:100%;
    height:85px;
    line-height:85px;
    color:#000;
    padding:0px 15px!important;
  }
  .navbar-default .navbar-nav > li > a:focus, .navbar-default .navbar-nav > li > a:hover{
    background: #0098f9;
    color:#fff;
  }
  .router-link-active{
    background:#0098f9;
    color:#fff!important;
  }
  .router-link-active:after{
    content:"";
    width:100%;
    height:4px;
    background:#3578c0;
    position:absolute;
    bottom:0;
    left:0;
  }
</style>
