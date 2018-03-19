<template>
    <div class="demodetail">
      <div class="democontent">
        <div class="demotitle">
          <h6>标题标题标题标题标题标题标题标题标题标题标题标题标题</h6>
          <p><span>发布：2017-10-30 09:00:55</span><i class="iconfont icon-liulan"></i><span>1683</span></p>
        </div>
        <div class="demotext">
          <p>这里视频内容这里视频内容这里视频内容这里视频内容这里视频内容这里视频内容这里视频内容这里视频内容这里视频内容这
            里视频内容这里视频内容这里视频内容这里视频内容这里视频内容.</p>
          <div class="demovideo">
            <img src="../../../static/images/demovideo.png" alt="">
          </div>
        </div>
      </div>
      <Footers/>
    </div>
</template>

<script>
  import Footers from  "../Footer/Footers"
    export default {
        name: "demodetail",
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
  .democontent{
    width:880px;
    height:auto;
    margin:0 auto;
  }
  .democontent .demotitle{
    width:100%;
    height:150px;
    text-align:center;
    padding:30px 0px;
    background-size:80px;
  }
  .democontent .demotitle h6{
    font-size:18px;
    margin-bottom:10px;
    font-weight:bold;
  }
  .democontent .demotitle p{
    color:#959595;
  }
  .democontent .demotitle p .iconfont{
    padding:0 10px;
  }
  .democontent .demotext{
    width:100%;
  }
  .democontent .demotext p{
    color:#9a9a9a;
    padding:0px 0px 30px;
  }
  .democontent .demotext .demovideo{
    width:100%;
    height:500px;
    margin:30px 0px;
  }
  .democontent .demotext .demovideo img{
    width:100%;
    height:100%;
  }
</style>
