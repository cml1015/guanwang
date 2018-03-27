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
          <div class="map">
            <div class="dituContent" id="dituContent">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default{
    data () {
      return {
      }
    },
    mounted () {
      this.initMap()
    },
    methods: {
      //这几个地方加this
      initMap () {
        this.createMap() ; //创建地图
        this.setMapEvent();//设置地图事件
        this.addMapControl();//向地图添加控件
        this.addMarker();//向地图中添加marker
      },
      createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(116.505155,39.990611);//定义一个中心点坐标
        map.centerAndZoom(point,20);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
      },
      setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
      },
      addMapControl(){
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
      },
      //标注点数组
      //创建marker
      addMarker(){
        var markerArr = [{title:"",content:"北京市朝阳区酒仙桥北路4号751DPARK时尚设计广场A9-1楼极地国际创新中心",point:"116.505155|39.990611",isOpen:1,icon:{w:30,h:30,l:0,t:0,x:30,lb:5}}];
        for(var i=0;i<markerArr.length;i++){
          var json = markerArr[i];
          var p0 = json.point.split("|")[0];
          var p1 = json.point.split("|")[1];
          var point = new BMap.Point(p0,p1);
          //这个地方加this
          var iconImg = this.createIcon(json.icon);
          var marker = new BMap.Marker(point,{icon:iconImg});
          //这个地方加this
          var iw = this.createInfoWindow(i);
          var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
          marker.setLabel(label);
          map.addOverlay(marker);
          label.setStyle({
            cursor:"pointer",
            border:"none"
          });
          var index = i;
          //这个地方加this
          var _iw = this.createInfoWindow(i);
          var _marker = marker;
          marker.addEventListener("click",function(){
            //这个地方加this
            this.openInfoWindow(_iw);
          });
          iw.addEventListener("open",function(){
            _marker.getLabel().hide();
          })
          _iw.addEventListener("close",function(){
            _marker.getLabel().show();
          })
          label.addEventListener("click",function(){
            _marker.openInfoWindow(_iw);
          })
          if(!!json.isOpen){
            label.hide();
            _marker.openInfoWindow(_iw);
          }
        }
      },
      //创建InfoWindow
      createInfoWindow(i){
        //这个地方复制一下上面的var markerArr 不然会不显示报错
        var markerArr = [{title:"有心科技有限公司",content:"北京市朝阳区酒仙桥北路4号751DPARK<br/>时尚设计广场A9-1楼极地国际创新中心",point:"116.505155|39.990611",isOpen:0,icon:{w:30,h:30,l:0,t:0,x:6,lb:5}}];
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
      },
      //创建一个Icon
      createIcon(json){
        //alert(this)
        var icon = new BMap.Icon("../../../static/images/mkicon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
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
    height:580px;
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
    height:300px;
    /*background:url("../../../static/images/map.png") no-repeat;*/
    /*background-size:100% 100%;*/
  }
  .dituContent{
    width: 100%;
    height: 100%;
  }
</style>
