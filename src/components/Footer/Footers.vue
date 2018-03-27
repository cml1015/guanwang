<template>
    <div class="footers">
      <div class="content">
        <div class="text">
          <div class="top">
            <div class="telus">
              <p>联系我们<br>CONTACT US</p>
              <p><router-link to="Aboutus">关于我们<br>ABOUT US</router-link></p>
            </div>
          </div>
          <div class="middle">
            <div class="left">
              <p><i class="iconfont icon-dizhi"></i>ADDRESS</p>
              <p class="comein">北京市朝阳区酒仙桥北路4号751DPARK时尚设计广场A9-1楼极地国际创新中心</p>
              <p class="qqp"><i class="iconfont icon-icon_qq"></i>QQ</p>
              <p class="comein">1098680972</p>
            </div>
            <div class="center">
              <p><i class="iconfont icon-youxiang"></i>EMAIL</p>
              <p class="comein">技术合作<a href="">product@datalove.cn</a></p>
              <p class="comein">市场合作<a href="">sales@datalove.cn</a></p>
              <p class="comein">产品咨询<a href="">marketing@datalove.cn</a></p>
              <p><i class="iconfont icon-dianhua"></i>TEL</p>
              <p class="comein">010-84599322</p>
            </div>
            <div class="right">
              <p>关于我们</p>
              <p>公司简介</p>
              <p>企业文化</p>
            </div>
          </div>
          <div class="bottom">
            <p>北京有心科技有限公司 版权所有 2016-2018 京ICP备100020</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "footers"
    }
</script>

<style scoped>
  a{
    color:#fff;
    text-decoration: none;
  }
  .footers{
    width:100%;
    height:400px;
    background:url("../../../static/images/footerbanner.png") no-repeat;
    background-size: 100% 100%;
  }
  .footers .content{
    width:880px;
    height:100%;
    margin:0 auto;
  }
  .footers .content .text{
    width:100%;
    height:330px;
    color:#fff;
    padding:50px 0px;
  }
  .footers .content .text .top{
    width:100%;
    height:50px;
    text-align:left;
  }
  .footers .content .text .top p:nth-child(1){
    float:left;
  }
  .footers .content .text .top p:nth-child(2){
    float:right;
    padding-right:20px;
  }
  .footers .content .text .middle {
    width: 100%;
    height: 180px;
    margin-top:20px;
  }
  .footers .content .text .middle div{
    float:left;
    width:33.3%;
  }
  .footers .content .text .middle div p{
    text-align:left;
  }
  .footers .content .text .middle .right p{
    text-align:right!important;
    padding-right:30px;
    margin-bottom:20px;
  }
  .footers .content .text .middle .iconfont{
    padding-right:10px;
  }
  .footers .content .text .middle .qqp{
    margin-top:53px;
  }
  .footers .content .text .bottom{
    width:100%;
    height:50px;
    line-height:50px;
    margin-top:30px;
    text-align:center;
  }
  .footers .content .text .middle .center{
    padding-left:80px;
  }
</style>
