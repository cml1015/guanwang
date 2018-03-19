<template>
    <div class="Industryapplication">
      <div class="indbanner"></div>
      <div class="indcontent">
          <div class="indtitle">
            <h3>行业应用案例</h3>
            <p>INDUSTRIAL APPLICATION CASES</p>
          </div>
        <div class="indmain">
          <div><img src="../../../static/images/ind.png" alt=""></div>
          <div><img src="../../../static/images/ind.png" alt=""></div>
          <div><img src="../../../static/images/ind.png" alt=""></div>
          <div><img src="../../../static/images/ind.png" alt=""></div>
        </div>
      </div>
      <Footers/>
    </div>
</template>

<script>
  import Footers from "../Footer/Footers"
    export default {
        name: "industryapplication",
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
    height:300px;
    display:flex;
    margin-bottom:20px;
    padding:0 20px;
  }
  .indcontent .indmain div{
    flex:1;
    width:150px;
    height:300px;
    float:left;
    margin-right:20px;
  }
  .indcontent .indmain div:last-child{
    margin-right:0;
  }
  .indcontent .indmain div img{
    width:100%;
    height:100%;
  }
</style>
