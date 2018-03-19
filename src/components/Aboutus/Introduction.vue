<template>
    <div class="introduction">
      <div class="intcontent">
        <div class="inttitle">
          <h3>公司简介</h3>
          <p>COMPANY PROFILE</p>
        </div>
        <div class="intmain">
          <p>北京有心科技有限公司依托于中南大学多学科联合创新项目团队和北京极地加科技有限公司（极地国际创新中心）联合发起于2017年初成立，
            以自主研发的老年服务评估系统为基础产品，以动态权威的老年人大数据为依托，专注老年评估和老年照护知识，集产品与服务于一身的专业
            服务机构。有心科技坚持“产、学、研”的企业发展道路，与中南大学、北京老年病医院、湘雅附属第二医院、中国老年医学学会、中国老年
            保健协会等强强合作，拥有数十位老年社会保障、老年临床医学、护理学、康复医学、心理学、大数据等领域教授组成专家团队，致力成为国
            内老年人健康照护的专家。产品已经在湘潭、株洲、长沙、福州、天津、重庆、新疆等十几个城市的政府和养老机构广泛使用。 </p>
        </div>
        <div class="develop_box">
          <div class="develop">
            <div class="developtitle">
              <h3>发展历程</h3>
              <p>DEVELOPMENT COURSE</p>
            </div>
            <div class="developcontent">
              <div class="conbox bline">
                <h6><span>2017</span>04/19</h6>
                <div class="context">
                  <p>我们成立了</p>
                  <p>北京有心科技有限公司成立，自主研发老年服务评估系统产品。</p>
                </div>
              </div>
              <div class="conbox">
                <h6><span>2017</span>04/19</h6>
                <div class="context">
                  <p>我们成立了</p>
                  <p>北京有心科技有限公司成立，自主研发老年服务评估系统产品。</p>
                </div>
              </div>
              <div class="conbox">
                <h6><span>2017</span>04/19</h6>
                <div class="context">
                  <p>我们成立了</p>
                  <p>北京有心科技有限公司成立，自主研发老年服务评估系统产品。</p>
                </div>
              </div>
            </div>
            <div class="developcontent">
              <div class="conbox">
                <h6><span>2017</span>04/19</h6>
                <div class="context">
                  <p>我们成立了</p>
                  <p>北京有心科技有限公司成立，自主研发老年服务评估系统产品。</p>
                </div>
              </div>
              <div class="conbox">
                <h6><span>2017</span>04/19</h6>
                <div class="context">
                  <p>我们成立了</p>
                  <p>北京有心科技有限公司成立，自主研发老年服务评估系统产品。</p>
                </div>
              </div>
              <div class="conbox">
                <h6><span>2017</span>04/19</h6>
                <div class="context">
                  <p>我们成立了</p>
                  <p>北京有心科技有限公司成立，自主研发老年服务评估系统产品。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="connect">
          <div class="contitle">
            <h3>联系我们</h3>
            <p>CONYACT US</p>
          </div>
          <div class="information">
            <div class="website">
              <h6>公司官网：</h6>
              <p><a href="http://www.datalove.cn/">http://www.datalove.cn/</a></p>
            </div>
            <div class="address">
              <h6>公司地址：</h6>
              <p>北京市朝阳区酒仙桥北路4号751DPARK时尚设计广场A9-1楼极地创新中心</p>
            </div>
            <div class="servicehotline">
              <h6>服务热线：</h6>
              <p>010-84599322</p>
            </div>
          </div>
          <div class="map"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "introduction"
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
  .intcontent{
    width:100%;
    height:auto;
    margin:0 auto;
  }
  .intcontent .inttitle{
    width:100%;
    height:110px;
    background:url("../../../static/images/bgline.png") no-repeat center 80%;
    padding:30px 0px;
    background-size:80px;
    text-align:center;
  }
  .intcontent .inttitle h3{
    font-weight:bold;
  }
  .intcontent .inttitle p{
    color:#cccccc;
    margin-top:5px;
  }
  .intcontent .intmain{
    width:880px;
    height:150px;
    margin:0 auto;
  }
  .intcontent .intmain p{
    text-indent:22px;
    line-height:20px;
  }
  .intcontent .develop_box{
    width:100%;
    height:500px;
    background:#f7f7f7;
  }
  .intcontent .develop_box .develop{
    width:880px;
    height:100%;
    margin:0 auto;
  }
  .intcontent .develop_box .develop .developtitle{
    width:100%;
    height:110px;
    background:url("../../../static/images/bgline.png") no-repeat center 80%;
    padding:30px 0px;
    background-size:80px;
    text-align:center;
  }
  .intcontent .develop_box .develop .developtitle h3{
    font-weight:bold;
  }
  .intcontent .develop_box .develop .developtitle p{
    color:#cccccc;
  }
  .intcontent .develop_box .develop .developcontent{
    width:100%;
    display:flex;
    margin-bottom:20px;
  }
  .intcontent .develop_box .develop .developcontent .conbox{
    flex:1;
    height:160px;
    background:#fff;
    margin:0px 10px;
  }
  .intcontent .develop_box .develop .developcontent .conbox h6{
    width:100%;
    height:50px;
    line-height:50px;
    background:#ccc;
    font-size:16px;
    color:#fff;
    padding-left:15px;
  }
  .intcontent .develop_box .develop .developcontent .conbox h6 span{
    font-size:20px;
    padding-right:5px;
  }
  .intcontent .develop_box .develop .developcontent .conbox .context{
    width:100%;
    height:110px;
    padding:10px 15px;
  }
  .intcontent .develop_box .develop .developcontent .conbox .context p:nth-child(1){
    font-weight:bold;
    margin-bottom:10px;
  }
  .intcontent .develop_box .develop .developcontent .bline h6{
    background:url("../../../static/images/bline.png") repeat-y;
  }
  .intcontent .connect{
    width:880px;
    height:540px;
    margin:0 auto;
  }
  .intcontent .connect .contitle{
    width:100%;
    height:110px;
    background:url("../../../static/images/bgline.png") no-repeat center 80%;
    padding:30px 0px;
    background-size:80px;
    text-align:center;
  }
  .intcontent .connect .information{
    width:100%;
    height:120px;
    display:flex;
  }
  .intcontent .connect .information div{
    flex:1;
    float:left;
  }
  .intcontent .connect .information div h6{
    font-size:16px;
    font-weight:bold;
    margin-bottom:10px;
  }
  .intcontent .connect .information div:nth-child(2) p{
    padding-right:190px;
    line-height:25px;
  }
  .intcontent .connect .information .address{
    flex:2;
  }
  .intcontent .connect .map{
    width:100%;
    height:270px;
    background:#ccc;
  }
</style>
