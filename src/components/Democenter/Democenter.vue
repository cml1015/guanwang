<template>
    <div class="democenter">
      <div class="demobanner"></div>
      <div class="democontent">
        <div class="demovideo">
          <dl v-for="item in list.data">
            <router-link :to="{name:'Demodetail',params:{id:item.id}}"><dt><img v-bind:src="item.imgSrc" alt=""><div></div></dt></router-link>
            <dd>
              <p>{{item.content}}</p>
            </dd>
          </dl>
        </div>
        <div class="pageul">
          <ul>
            <li><</li>
            <li class="blueli">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>></li>
          </ul>
        </div>
      </div>
      <Footers/>
    </div>
</template>

<script>
  import Footers from "../Footer/Footers"
    export default {
        name: "democenter",
        components:{
            Footers
        },
        data(){
          return {
            list:{}
          }
        },
        created(){
          this.$http.get('http://192.168.1.140:8080/api/democenter').then((response) => {
            this.list=response.data
            //console.log(this.list.data)
          });
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
    display:block;
    width:100%;
    height:100%;
  }
  .demobanner{
    width:100%;
    height:300px;
    background:url("../../../static/images/demobanner.png") no-repeat;
    background-size:100% 100%;
  }
  .democontent{
    width:880px;
    height:auto;
    margin:0 auto;
  }
  .democontent .demovideo{
    width:100%;
    margin:30px 0px;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .democontent .demovideo dl{
    width:30%;
    height:100%;
    margin:10px 10px;
    cursor:pointer;
  }
  .democontent .demovideo dl dt{
    position:relative;
  }
  .democontent .demovideo dl:hover div{
    display:block;
  }
  .democontent .demovideo dl div{
    content:"";
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.6);
    position:absolute;
    left:0;
    top:0;
    display:none;
  }
  .democontent .demovideo dl dd{
    padding:10px 0px;
  }
  .democontent .demovideo img{
    width:100%;
    height:100%;
    display:inline;
  }
  .democontent .pageul{
    width:100%;
    height:30px;
    margin:30px 0px;
  }
  .democontent .pageul ul{
    width:35%;
    height:30px;
    float:right;
  }
  .democontent .pageul ul li{
    float:left;
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center;
    background:#bbbbbb;
    margin:0 5px;
    color:#fff;
    cursor:pointer;
  }
  .democontent .pageul ul li.blueli{
    background:#499fe3;
  }
</style>
