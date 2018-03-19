<template>
  <div class="mediareport">
    <div class="medcontent">
      <div class="medtitle">
        <h3>媒体报道</h3>
        <p>MEDIA REPORTS</p>
      </div>
      <div class="medmain">
        <dl>
          <dt><img src="../../../static/images/medimg.png" alt=""></dt>
          <dd>
            <h6>株洲茶山镇开展老年人能力评估业务培训会</h6>
            <h5>02-01</h5>
            <div class="year">2018</div>
            <div class="heng">—</div>
            <p>7月6日，在株洲市茶山镇组织了老年人能力评估业务培训会。本次培训会由醴陵市民政局匡辉平副局长主持，邀请有心科技特聘的专家湘雅二医院张孟喜副主任莅临会场指导，醴陵市多位领导也参加了本次培训会。</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../../static/images/medimg.png" alt=""></dt>
          <dd>
            <h6>有心科技出席中国老年保健协会第五届第一次分支机构座谈会</h6>
            <h5>02-01</h5>
            <div>2018</div>
            <div>-</div>
            <p>2017年12月29日，中国老年保健协会第五届第一次分支机构座谈会在京举行。协会会长刘远立、监事长耿和荪，及各分支机构负责人共60余人参加本次座谈会，会议由协会副会长兼秘书长俞华主持。</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../../static/images/medimg.png" alt=""></dt>
          <dd>
            <h6>有心科技出席中国老年保健协会第五届第一次分支机构座谈会</h6>
            <h5>02-01</h5>
            <div>2018</div>
            <div>-</div>
            <p>2017年12月29日，中国老年保健协会第五届第一次分支机构座谈会在京举行。协会会长刘远立、监事长耿和荪，及各分支机构负责人共60余人参加本次座谈会，会议由协会副会长兼秘书长俞华主持。</p>
          </dd>
        </dl>
        <div class="page">
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
    </div>
  </div>
</template>

<script>
  export default {
    name: "mediareport"
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
  .medcontent{
    width:100%;
    height:auto;
    margin:0 auto;
  }
  .medcontent .medtitle{
    width:100%;
    height:110px;
    background:url("../../../static/images/bgline.png") no-repeat center 80%;
    padding:30px 0px;
    background-size:80px;
    text-align:center;
  }
  .medcontent .medtitle h3{
    font-weight:bold;
  }
  .medcontent .medtitle p{
    color:#cccccc;
    margin-top:5px;
  }
  .medcontent .medmain{
    width:880px;
    margin:0 auto;
  }
  .medcontent .medmain dl{
    width:100%;
    height:150px;
    margin-top:20px;
  }
  .medcontent .medmain dl dt{
    float:left;
    width:30%;
    height:100%;
  }
  .medcontent .medmain dl dt img{
    width:100%;
    height:100%;
  }
  .medcontent .medmain dl dd{
    float:left;
    width:70%;
    padding-left:2%;
    color:#cccccc;
  }
  .medcontent .medmain dl dd h6{
    font-size:16px;
    color:#000;
    font-weight:bold;
  }
  .medcontent .medmain dl dd h5{
    font-size:20px;
    font-weight:700;
    padding-top:10px;
  }
  .medcontent .medmain dl dd .year{
    font-weight:bold;
  }
  .medcontent .medmain dl dd .heng{
    font-weight:bold;
    fopnt-size:20px;
  }
  .medcontent .medmain dl dd p{
    color:#999999;
    padding-right:25%;
  }
  .medcontent .medmain .page{
    width:100%;
    height:30px;
    margin:30px 0px;
  }
  .medcontent .medmain ul{
    width:50%;
    height:30px;
    float:right;
  }
  .medcontent .medmain ul li{
    float:left;
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center;
    background:#bbbbbb;
    margin:0 5px;
    color:#fff;
  }
  .medcontent .medmain ul li.blueli{
    background:#499fe3;
  }
</style>


