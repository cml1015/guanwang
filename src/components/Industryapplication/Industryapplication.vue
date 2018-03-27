<template>
    <div class="Industryapplication">
      <div class="indbanner"></div>
      <div class="indcontent">
          <div class="indtitle">
            <h3>行业应用案例</h3>
            <p>INDUSTRIAL APPLICATION CASES</p>
          </div>
        <div class="indmain" >
          <div class="indbox" v-for="(item,index) in industry" @mouseover="toArticleDetail(index)">
            <img v-bind:src="item.imgSrc" alt="">
            <div class="top">{{item.title}}<transition name="fold"><p v-show="activeIndex===index" class="example">{{item.content}}</p></transition></div>
          </div>
        </div>
      </div>
      <Footers/>
    </div>
</template>

<script>
  import Footers from "../Footer/Footers"
    export default {
        name: "industryapplication",
        data(){
          return{
            active: false,
            industry:{},
            isshow:null,
            activeIndex: -1
          }
        },
        components:{
            Footers
        },
        created(){
          this.menu();
          this.$http.get('http://192.168.1.140:8080/api/industry').then((response) => {
            this.industry=response.data.data
          });
        },
        methods:{
          menu(){
            window.scrollTo(0,0)
          },
          changeState:function(){
            this.active=true
          },
          changeStates:function(){
            this.active=false
          },
          toArticleDetail(index) {
            this.activeIndex = index;
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
  .indbanner{
    width:100%;
    height:300px;
    background:url("../../../static/images/indbanner.png") no-repeat;
    background-size:100% 100%;
  }
  .indcontent{
    width:880px;
    height:auto;
    margin:0 auto;
  }
  .indcontent .indtitle{
    width:100%;
    height:110px;
    background:url("../../../static/images/bgline.png") no-repeat center 80%;
    padding:30px 0px;
    background-size:150px;
    text-align:center;
  }
  .indcontent .indtitle h3{
    font-weight:bold;
  }
  .indcontent .indtitle p{
    color:#cccccc;
    margin-top:5px;
  }
  .indcontent .indmain{
    width:100%;
    display:flex;
    margin-bottom:20px;
    padding:0 20px;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .indcontent .indmain .indbox{
    width:23%;
    height:300px;
    margin:0px 8px 15px;
    position:relative;
    cursor:pointer;
  }
  .indcontent .indmain .indbox .top{
    position:absolute;
    width:100%;
    height:auto;
    background:rgba(0,0,0,0.6);
    left:0;
    top:0;
    color:#fff;
    font-size:18px;
    padding:5px 20px;
  }
  .indcontent .indmain div .top p{
    width:100%;
    height:240px;
    color:#fff;
    font-size:14px;
    position:absolute;
    left:0;
    top:60px;
    padding:20px 15px;
    background:rgba(0,0,0,0.6);
    text-align:justify;
    overflow:hidden;
  }
  .indcontent .indmain div p span.hide{
    display:none;
  }
  .indcontent .indmain div p span.show{
    display:block;
  }
  .indcontent .indmain div:last-child{
    margin-right:0;
  }
  .indcontent .indmain div img{
    width:100%;
    height:100%;
  }
  .example {
    width: 100px;
    height: 100px;
    transform: translate3d(0,0,0);
  }
  .fold-enter-active, .fold-leave-active {
    transition: all .5s;
  }
  .fold-enter, .fold-leave-active {
    transform: translate3d(0,-60px, 0);
  }
</style>
