<template>
    <div class="Productpresentation">
      <div class="probanner"></div>
      <div class="procontent">
        <div class="prosection" v-for="(item,index) in list.data">
          <dl>
            <dt><img v-bind:src="item.imgSrc" alt=""></dt>
            <dd>
              <h4>{{item.title}}</h4>
              <div></div>
              <p>{{item.content}}</p>
              <button><router-link  :to="{name:'Prolist',params:{id:item.id}}">了解更多<i class="iconfont icon-iconfontjiantou2"></i></router-link></button>
            </dd>
          </dl>
        </div>
      </div>
      <Footers/>
    </div>
</template>

<script>
  import Footers from "../Footer/Footers"
    export default {
        name: "productpresentation",
        data(){
          return {
            list:{}
          }
        },
        components:{
          Footers
        },
        created(){
            this.menu();
            this.$http.get('http://192.168.1.140:8080/api/data').then((response) => {
              this.list=response.data
              //console.log(this.list.data)
            })
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
  }
  a{
    color:#fff;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: inline-block;
    padding-top: 6px;
  }
  .Productpresentation{
    width:100%;
    height:100%;
  }
  .probanner{
    width:100%;
    height:300px;
    background:url("../../../static/images/probanner.png") no-repeat;
    background-size:100% 100%;
  }
  .procontent{
    width:880px;
    height:auto;
    margin:0 auto;
  }
  .procontent .prosection{
    width:100%;
    height:390px;
  }
  .procontent .prosection dl{
    width:100%;
    height:100%;
  }
  .procontent .prosection dl dt{
    width:50%;
    height:100%;
    float:left;
  }
  .procontent .prosection dl dt img{
    width:100%;
    height:100%;
  }
  .procontent .prosection dl dd{
    width:50%;
    height:100%;
    float:left;
    padding:20px 40px 35px 50px;
  }
  .procontent .prosection dl dd h4{
    text-align:left;
    font-weight:bold;
    margin:15px 0px;
    font-size:20px;
  }
  .procontent .prosection dl dd div{
    width:100%;
    height:30px;
    background:url("../../../static/images/line.png") no-repeat left center;
  }
  .procontent .prosection dl dd p{
    line-height:30px;
    margin:10px 0px;
    color:#898989;
  }
  .procontent .prosection dl dd{
    text-align:left;
  }
  .procontent .prosection dl dd button{
    width:110px;
    height:40px;
    background:url("../../../static/images/textbg.png") no-repeat;
    background-size:100% 100%;
    border:0;
    color:#fff;
    margin-top:30px;
    outline:none;
  }
  .procontent .prosection dl dd button .iconfont{
    padding-left:10px;
  }
  .procontent .prosection:nth-of-type(odd) dl dt{
    float:left;
  }
  .procontent .prosection:nth-of-type(odd) dl dd{
    float:right;
  }
  .procontent .prosection:nth-of-type(even) dl dt{
    float:right;
  }
  .procontent .prosection:nth-of-type(even) dl dd{
    float:left;
  }
  .procontent .prosection:last-child{
    margin-bottom:30px;
  }
</style>
