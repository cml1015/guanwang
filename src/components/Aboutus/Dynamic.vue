<template>
  <div class="dynamic">
    <div class="dycontent">
      <div class="dytitle">
        <h3>公司动态</h3>
        <p>COMPANY DYNAMIC</p>
      </div>
      <div class="dymain">
        <dl>
          <dt><img src="../../../static/images/dyimg.png" alt=""></dt>
          <dd>
            <h6>有心科技出席中国老年保健协会第五届第一次分支机构座谈会</h6>
            <h5>02-01</h5>
            <div class="year">2018</div>
            <div class="heng">—</div>
            <p>2017年12月29日，中国老年保健协会第五届第一次分支机构座谈会在京举行。协会会长刘远立、监事长耿和荪，及各分支机构负责人共60余人参加本次座谈会，会议由协会副会长兼秘书长俞华主持。</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../../static/images/dyimg.png" alt=""></dt>
          <dd>
            <h6>有心科技出席中国老年保健协会第五届第一次分支机构座谈会</h6>
            <h5>02-01</h5>
            <div>2018</div>
            <div>-</div>
            <p>2017年12月29日，中国老年保健协会第五届第一次分支机构座谈会在京举行。协会会长刘远立、监事长耿和荪，及各分支机构负责人共60余人参加本次座谈会，会议由协会副会长兼秘书长俞华主持。</p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../../static/images/dyimg.png" alt=""></dt>
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
    name: "dynamic"
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
  .dycontent{
    width:100%;
    height:auto;
    margin:0 auto;
  }
  .dycontent .dytitle{
    width:100%;
    height:110px;
    background:url("../../../static/images/bgline.png") no-repeat center 80%;
    padding:30px 0px;
    background-size:80px;
    text-align:center;
  }
  .dycontent .dytitle h3{
    font-weight:bold;
  }
  .dycontent .dytitle p{
    color:#cccccc;
    margin-top:5px;
  }
  .dycontent .dymain{
    width:880px;
    margin:0 auto;
  }
  .dycontent .dymain dl{
    width:100%;
    height:150px;
    margin-top:20px;
  }
  .dycontent .dymain dl dt{
    float:left;
    width:30%;
    height:100%;
  }
  .dycontent .dymain dl dt img{
    width:100%;
    height:100%;
  }
  .dycontent .dymain dl dd{
    float:left;
    width:70%;
    padding-left:2%;
    color:#cccccc;
  }
  .dycontent .dymain dl dd h6{
    font-size:16px;
    color:#000;
    font-weight:bold;
  }
  .dycontent .dymain dl dd h5{
    font-size:20px;
    font-weight:700;
    padding-top:10px;
  }
  .dycontent .dymain dl dd .year{
    font-weight:bold;
  }
  .dycontent .dymain dl dd .heng{
    font-weight:bold;
    fopnt-size:20px;
  }
  .dycontent .dymain dl dd p{
    color:#999999;
    padding-right:25%;
  }
  .dycontent .dymain .page{
    width:100%;
    height:30px;
    margin:30px 0px;
  }
  .dycontent .dymain ul{
    width:50%;
    height:30px;
    float:right;
  }
  .dycontent .dymain ul li{
    float:left;
    width:30px;
    height:30px;
    line-height:30px;
    text-align:center;
    background:#bbbbbb;
    margin:0 5px;
    color:#fff;
  }
  .dycontent .dymain ul li.blueli{
    background:#499fe3;
  }
</style>

