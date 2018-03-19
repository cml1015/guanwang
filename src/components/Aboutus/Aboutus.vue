<template>
    <div class="Aboutus">
      <div class="aboutbanner"></div>
      <div class="aboutnav">
        <ul>
          <li><router-link to="/Aboutus/Introduction" class="link">公司简介</router-link></li>
          <li><router-link to="/Aboutus/Dynamic" class="link">公司动态</router-link></li>
          <li><router-link to="/Aboutus/Mediareport" class="link">媒体报道</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
      <div class="aboutcontent"></div>
      <Footers/>
    </div>
</template>

<script>
  import Footers from "../Footer/Footers"
    export default {
        name: "aboutus",
        components:{
            Footers
        },
        created(){
          this.menu();
        },
        methods:{
          menu(){
            window.scrollTo(0,0)
          }
        }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  a{
    color:#000;
    text-decoration: none;
  }
  .aboutbanner{
     width:100%;
     height:300px;
     background:url("../../../static/images/aboutbanner.png") no-repeat;
     background-size:100% 100%;
   }
  .aboutcontent{
    width:880px;
    height:auto;
    margin:0 auto;
  }
  .aboutnav{
    width:100%;
    height:70px;
    line-height:70px;
    background:#f0f0f0;
  }
  .aboutnav ul{
    width:880px;
    height:100%;
    margin:0 auto;
    display:flex;
    text-align:center;
  }
  .aboutnav ul li{
    float:left;
    flex:1;
  }
  .router-link-active{
    display:inline-block;
    width:100%;
    height:100%;
    background:#fff;
  }
</style>
