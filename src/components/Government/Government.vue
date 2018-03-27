<template>
    <div class="Government">
      <div class="gobanner"></div>
      <div class="gocontent">
        <div class="gotitle">
          <h3>政府应用案例</h3>
          <p>GOVERNMENT APPLICATION CASES</p>
        </div>
        <div class="gomain">
          <div v-for="(item,index) in govement" @mouseover="toArticleDetail(index)">
            <img v-bind:src="item.imgSrc" alt="">
            <p>{{item.title}}<transition name="fold"><span v-show="activeIndex===index">{{item.content}}</span></transition></p>
          </div>
        </div>
      </div>
      <Footers/>
    </div>
</template>

<script>
  import Footers from "../Footer/Footers"
    export default {
        name: "government",
        data(){
            return{
              activeIndex: -1,
              govement:{}
            }
        },
        components:{
            Footers
        },
        created(){
          this.menu();
          this.$http.get('http://192.168.1.140:8080/api/govement').then((response) => {
            this.govement=response.data.data
          });
        },
        methods:{
          menu(){
            window.scrollTo(0,0)
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
    box-sizing:border-box;
  }
  .gobanner {
    width: 100%;
    height: 300px;
    background: url("../../../static/images/momentbanner.png") no-repeat;
    background-size: 100% 100%;
  }
  .gocontent{
    width:880px;
    height:auto;
    margin:0 auto;
  }
  .gocontent .gotitle{
    width:100%;
    height:110px;
    background:url("../../../static/images/bgline.png") no-repeat center 80%;
    padding:30px 0px;
    background-size:150px;
    text-align:center;
  }
  .gocontent .gotitle h3{
    font-weight:bold;
  }
  .gocontent .gotitle p{
    color:#cccccc;
    margin-top:5px;
  }
  .gocontent .gomain{
    width:100%;
    display:flex;
    margin-bottom:20px;
    padding:0 20px;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .gocontent .gomain div{
    width:23%;
    height:300px;
    margin:0px 8px 15px;
    position:relative;
    cursor:pointer;
  }
  .gocontent .gomain div p{
    position:absolute;
    width:100%;
    height:60px;
    background:rgba(0,0,0,0.6);
    left:0;
    top:0;
    color:#fff;
    padding:20px 0px;
    text-align:center;
    font-size:18px;
  }
  .gocontent .gomain p span{
    color:#fff;
    display:inline-block;
    font-size:14px;
    height:240px;
    position:absolute;
    left:0;
    top:60px;
    padding:0px 20px;
    background:rgba(0,0,0,0.6);
    text-align:justify;
    overflow:hidden;
  }
  .gocontent .gomain div:last-child{
    margin-right:0;
  }
  .gocontent .gomain div img{
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
