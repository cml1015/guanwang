<template>
    <div class="Government">
      <div class="gobanner"></div>
      <div class="gocontent">
        <div class="gotitle">
          <h3>政府应用案例</h3>
          <p>GOVERNMENT APPLICATION CASES</p>
        </div>
        <div class="gomain">
          <div><img src="../../../static/images/moments.png" alt=""></div>
          <div><img src="../../../static/images/moments.png" alt=""></div>
          <div><img src="../../../static/images/moments.png" alt=""></div>
          <div><img src="../../../static/images/moments.png" alt=""></div>
        </div>
      </div>
      <Footers/>
    </div>
</template>

<script>
  import Footers from "../Footer/Footers"
    export default {
        name: "government",
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
    height:300px;
    display:flex;
    margin-bottom:20px;
    padding:0 20px;
  }
  .gocontent .gomain div{
    flex:1;
    width:150px;
    height:300px;
    float:left;
    margin-right:20px;
  }
  .gocontent .gomain div:last-child{
    margin-right:0;
  }
  .gocontent .gomain div img{
    width:100%;
    height:100%;
  }
</style>
