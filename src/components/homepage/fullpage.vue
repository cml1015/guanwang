<template>
  <div class="fullpage">
    <page :currentPage="currentPage">
      <section>
        <swiper :options="swiperOption" ref="mySwiper">
           <!-- slides -->
          <swiper-slide>
            <video id="myvideo" :src="videoSrc" :poster="videoImg" controls="controls" loop="loop" autoplay="autoplay" height="100%" width="100%">

            </video>
            <div class="play_box">
              <i class="iconfont icon-bofangshu"></i>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="play_box">
              <i class="iconfont icon-icon_qq"></i>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="play_box">
              <i class="iconfont icon-bofangshu"></i>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="play_box">
              <i class="iconfont icon-icon_qq"></i>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </section>
    </page>
    <page :currentPage="currentPage">
      <section class="two">
          <canvas id="J_dotLine">
          </canvas>
        <h1 class="text-center"><router-link to="Democenter"><img src="../../../static/images/show.png" alt=""></router-link></h1>

          <swiper :options="swiperOption" ref="mySwiper">

            <swiper-slide>
              <div class="video_box">
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="video_box">
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="video_box">
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="video_box">
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
                <div class="video"><router-link to="Demodetail/1"><img src="../../../static/images/video.png" alt=""></router-link></div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        <div class="projections"></div>
      </section>
    </page>
    <page :currentPage="currentPage">

      <section>
        <h1 class="text-center"><router-link to="Productpresentation"><img src="../../../static/images/product.png" alt=""></router-link></h1>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <div class="list_box">
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="list_box">
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="list_box">
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="list_box">
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
              <div class="list"><router-link to="Prolist/1"><img src="../../../static/images/a.png" alt=""></router-link></div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </section>
    </page>
    <page :currentPage="currentPage">
      <section class="two">
        <img src="../../../static/images/animate.png" alt="" class="animationimg">
        <img src="../../../static/images/animate.png" alt="" class="animationimgs">
        <h1 class="text-center"><router-link to="Government"><img src="../../../static/images/moument.png" alt=""></router-link></h1>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <div class="moment_box">
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <!--<div class="projection"></div>-->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="moment_box">
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <!--<div class="projection"></div>-->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="moment_box">
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <!--<div class="projection"></div>-->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="moment_box">
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <!--<div class="projection"></div>-->
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="projections"></div>
      </section>
    </page>
    <page :currentPage="currentPage">
      <section>
        <h1 class="text-center"><router-link to="Industryapplication"><img src="../../../static/images/six.png" alt=""></router-link></h1>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <div class="moment_box">
              <div class="moment"><img src="../../../static/images/welfarecentre.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/welfarecentre.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/welfarecentre.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/welfarecentre.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/welfarecentre.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/welfarecentre.png" alt=""></div>
              <!--<div class="projection"></div>-->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="moment_box">
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <!--<div class="projection"></div>-->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="moment_box">
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <!--<div class="projection"></div>-->
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="moment_box">
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <div class="moment"><img src="../../../static/images/moumenta.png" alt=""></div>
              <!--<div class="projection"></div>-->
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </section>
    </page>
    <page :currentPage="currentPage">
      <section class="two">
        <img src="../../../static/images/animate.png" alt="" class="animationimg">
        <img src="../../../static/images/animate.png" alt="" class="animationimgs">
        <h1 class="text-center"><img src="../../../static/images/partner.png" alt=""></h1>
        <div class="partner_box">
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
          <div class="partner"><img src="../../../static/images/school.png" alt=""></div>
        </div>
      </section>
    </page>
    <page :currentPage="currentPage">
      <section>
        <div class="seven">
          <div class="content">
            <div class="erwei">
              <dl>
                <dt><img src="../../../static/images/ma_one.png" alt=""></dt>
                <dd>如果您已经成为我公司签约用户，请选择下载</dd>
              </dl>
              <dl>
                <dt><img src="../../../static/images/ma_two.png" alt=""></dt>
                <dd>安卓版本及IOS版本最新安装文件</dd>
              </dl>
              <dl>
                <dt><img src="../../../static/images/ma_three.png" alt=""></dt>
                <dd>如果您准备试用评估系统 ，请关注公众号</dd>
              </dl>
            </div>
            <div class="text">
              <div class="top">
                <div class="telus">
                  <p>联系我们<br>CONTACT US</p>
                  <p><router-link to="Aboutus">关于我们<br>ABOUT US</router-link></p>
                </div>
              </div>
              <div class="middle">
                <div class="left">
                  <p><i class="iconfont icon-dizhi"></i>地址</p>
                  <p class="comein">北京市朝阳区酒仙桥北路4号751DPARK时尚设计广场A9-1楼极地国际创新中心</p>
                  <p class="qqp"><i class="iconfont icon-icon_qq"></i>QQ</p>
                  <p class="comein">1098680972</p>
                </div>
                <div class="center">
                  <p><i class="iconfont icon-youxiang"></i>邮箱</p>
                  <p class="comein">技术合作<a href="">product@datalove.cn</a></p>
                  <p class="comein">市场合作<a href="">sales@datalove.cn</a></p>
                  <p class="comein">产品咨询<a href="">marketing@datalove.cn</a></p>
                  <p><i class="iconfont icon-dianhua"></i>电话</p>
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

      </section>
    </page>
    <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption"></page-controller>
  </div>
</template>

<script>
  import Page from './Page.vue';
  import PageController from './PageController.vue';
  import 'swiper/dist/css/swiper.css'
  import { swiper , swiperSlide } from 'vue-awesome-swiper'

    (function(window){
    function Dotline(option){
      this.opt = this.extend({
        dom:'J_dotLine',//画布id
        cw:1000,//画布宽
        ch:500,//画布高
        ds:100,//点的个数
        r:0.5,//圆点半径
        cl:'#fff',//颜色
        dis:100//触发连线的距离
      },option);
      this.c = document.getElementById(this.opt.dom);//canvas元素id
      this.ctx = this.c.getContext('2d');
      this.c.width = this.opt.cw;//canvas宽
      this.c.height = this.opt.ch;//canvas高
      this.dotSum = this.opt.ds;//点的数量
      this.radius = this.opt.r;//圆点的半径
      this.disMax = this.opt.dis*this.opt.dis;//点与点触发连线的间距
      this.color = this.color2rgb(this.opt.cl);//设置粒子线颜色
      this.dots = [];
      //requestAnimationFrame控制canvas动画
      var RAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
      var _self = this;
      //增加鼠标效果
      var mousedot = {x:null,y:null,label:'mouse'};
      this.c.onmousemove = function(e){
        var e = e || window.event;
        mousedot.x = e.clientX - _self.c.offsetLeft;
        mousedot.y = e.clientY - _self.c.offsetTop;
      };
      this.c.onmouseout = function(e){
        mousedot.x = null;
        mousedot.y = null;
      }
      //控制动画
      this.animate = function(){
        _self.ctx.clearRect(0, 0, _self.c.width, _self.c.height);
        _self.drawLine([mousedot].concat(_self.dots));
        RAF(_self.animate);
      };
    }
    //合并配置项，es6直接使用obj.assign();
    Dotline.prototype.extend = function(o,e){
      for(var key in e){
        if(e[key]){
          o[key]=e[key]
        }
      }
      return o;
    };
    //设置线条颜色(参考{抄袭}张鑫旭大大，http://www.zhangxinxu.com/wordpress/2010/03/javascript-hex-rgb-hsl-color-convert/)
    Dotline.prototype.color2rgb = function(colorStr){
      var red = null,
        green = null,
        blue = null;
      var cstr = colorStr.toLowerCase();//变小写
      var cReg = /^#[0-9a-fA-F]{3,6}$/;//确定是16进制颜色码
      if(cstr&&cReg.test(cstr)){
        if(cstr.length==4){
          var cstrnew = '#';
          for(var i=1;i<4;i++){
            cstrnew += cstr.slice(i,i+1).concat(cstr.slice(i,i+1));
          }
          cstr = cstrnew;
        }
        red = parseInt('0x'+cstr.slice(1,3));
        green = parseInt('0x'+cstr.slice(3,5));
        blue = parseInt('0x'+cstr.slice(5,7));
      }
      return red+','+green+','+blue;
    }
    //画点
    Dotline.prototype.addDots = function(){
      var dot;
      for(var i=0; i<this.dotSum; i++){//参数
        dot = {
          x : Math.floor(Math.random()*this.c.width)-this.radius,
          y : Math.floor(Math.random()*this.c.height)-this.radius,
          ax : (Math.random() * 2 - 1) / 1.5,
          ay : (Math.random() * 2 - 1) / 1.5
        }
        this.dots.push(dot);
      }
    };
    //点运动
    Dotline.prototype.move = function(dot){
      dot.x += dot.ax;
      dot.y += dot.ay;
      //点碰到边缘返回
      dot.ax *= (dot.x>(this.c.width-this.radius)||dot.x<this.radius)?-1:1;
      dot.ay *= (dot.y>(this.c.height-this.radius)||dot.y<this.radius)?-1:1;
      //绘制点
      this.ctx.beginPath();
      this.ctx.arc(dot.x, dot.y, this.radius, 0, Math.PI*2, true);
      this.ctx.stroke();
    };
    //点之间画线
    Dotline.prototype.drawLine = function(dots){
      var nowDot;
      var _that = this;
      //自己的思路：遍历两次所有的点，比较点之间的距离，函数的触发放在animate里
      this.dots.forEach(function(dot){

        _that.move(dot);
        for(var j=0; j<dots.length; j++){
          nowDot = dots[j];
          if(nowDot===dot||nowDot.x===null||nowDot.y===null) continue;//continue跳出当前循环开始新的循环
          var dx = dot.x - nowDot.x,//别的点坐标减当前点坐标
            dy = dot.y - nowDot.y;
          var dc = dx*dx + dy*dy;
          if(Math.sqrt(dc)>Math.sqrt(_that.disMax)) continue;
          // 如果是鼠标，则让粒子向鼠标的位置移动
          if (nowDot.label && Math.sqrt(dc) >Math.sqrt(_that.disMax)/2) {
            dot.x -= dx * 0.02;
            dot.y -= dy * 0.02;
          }
          var ratio;
          ratio = (_that.disMax - dc) / _that.disMax;
          _that.ctx.beginPath();
          _that.ctx.lineWidth = ratio / 2;
          _that.ctx.strokeStyle = 'rgba('+_that.color+',' + parseFloat(ratio + 0.2).toFixed(1) + ')';
          _that.ctx.moveTo(dot.x, dot.y);
          _that.ctx.lineTo(nowDot.x, nowDot.y);
          _that.ctx.stroke();//不描边看不出效果

          //dots.splice(dots.indexOf(dot), 1);
        }
      });
    };
    //开始动画
    Dotline.prototype.start = function(){
      var _that = this;
      this.addDots();
      setTimeout(function() {
        _that.animate();
      }, 100);
    }
    window.Dotline = Dotline;
  }(window));
  //调用
  window.onload = function(){
    var dotline = new Dotline({
      dom:'J_dotLine',//画布id
      cw:1900,//画布宽
      ch:800,//画布高
      ds:80,//点的个数
      r:1.5,//圆点半径
      cl:'#ddd',//粒子线颜色
      dis:200//触发连线的距离
    }).start();
  }
  export default {
    name: 'app',
    components: {
      Page,
      PageController,
      swiper,
      swiperSlide
    },
    data() {
      return {
        _dom:"",
        videoSrc:'http://covteam.u.qiniudn.com/oceans.mp4',
        videoImg:'http://covteam.u.qiniudn.com/poster.png',
        url:"../../../static/video/video.wmv",
        currentPage: 1,
        isShow:false,
        options: [{
          // the color of background
          background: 'url(../../../static/images/banner.png) no-repeat',
          // the color of text
          color: '#fff',
          // is content center
          isCenter: true
        }, {
          background: '#fff',
          color: '#fff',
          isCenter: true
        }, {
          background: 'url(../../../static/images/threeBanner.png) no-repeat',
          color: '#fff',
          isCenter: true
        }, {
          background: '#fff',
          color: '#fff',
          isCenter: true
        },
        {
          background: 'url(../../../static/images/intbanner.png) no-repeat',
          color: '#fff',
          isCenter: true
        },
        {
          background: '#fff',
          color: '#fff',
          isCenter: true
        },
        {
          background: 'url(../../../static/images/footer.png) no-repeat',
          color: '#fff',
          isCenter: true
        },
        ],
        controllerOption: {
          arrowsType: true,
          navbar: true,
          highlight: true,
          loop: false
        },
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          // direction : 'vertical',
          //effect:"coverflow",
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          paginationType:"bullets",
          //pagination : '.swiper-pagination',
          //paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
            type: 'custom',
            //自定义分页器样式
            renderCustom: function (swiper, current, total) {
              const activeColor = '#0093f1'
              const normalColor = '#fff'
              let color = ''
              let paginationStyle = ''
              let html = ''
              for (let i = 1; i <= total; i++) {
                if (i === current) {
                  color = activeColor
                  this.clickable=true
                  this.isShow=this.clickable
                  //console.log(this.clickable)
                } else {
                  color = normalColor
                  this.clickable=false
                  this.isShow=this.clickable
                }
                paginationStyle = `background:${color};opacity:1;margin-right:20px;width:15px;height:15px;`
                html += `<span class="swiper-pagination-bullet" style=${paginationStyle}><span v-show="isShow" class="circle" style="width:25px;
height:25px;border:2px solid #0093f1;display:inline-block;border-radius:50%;position: relative;top: -5px;left: -5px;"></span></span>`
              }
              return html
            }
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    computed: {
      // 总page数
      pageNum() {
        return this.options.length;
      },
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      changePage(index) {
        // beforeLeave Hook
        let beforeIndex = this.currentPage - 1;
        let leaveFunction = this.options[beforeIndex].beforeLeave;
        typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex]);
        // change page
        this.currentPage = index;
        // afterEnter Hook
        let nextIndex = index - 1;
        let enterFunction = this.options[nextIndex].afterEnter;
        this.$nextTick(function() {
          typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex]);
        })
      }
    },
    mounted() {
      this.$children.forEach((child, index) => {
        // 动态设置各个page内的options
        if (child.option === null) {
          let childOption = this.options[index];
          this.$set(childOption, 'index', index + 1);
          child.option = childOption;
        }
      });
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }
  .fullpage{
    width:100%;
    height:91%;
  }
  .app {
    height: 100%;
    width: 100%;
  }
  video{
    width:100%;
    height:100%;
    object-fit: fill;
  }

  /* 下面的是与fullPage无关的样式 */

  section {
    width:100%;
    height:100%;
    transition: all 0.5s ease-in-out 0s;
    background-size:100% 100%!important;
  }

  .move-left {
    transform: translateX(-1000%);
  }

  .move-right {
    transform: translateX(1000%);
  }

  @media screen and (max-width:768px) {
    html,
    body {
      font-size: 12px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }

  .person-img {
    width: 223px;
    height: 185px;
    float: left;
    background-color: #fff;
    box-shadow: 3px 3px 10px #999;
  }

  .person-img img {
    height: 100%;
    width: 100%;
  }

  .person-basic-info {
    overflow: hidden;
    float: right;
    margin-left: 40px;
  }

  .info-line {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .text-center {
    text-align: center;
  }

  .text-bold {
    font-weight: bold;
  }

  .demo-intro {
    text-indent: 2em;
  }

  dt {
    font-weight: bold;
    font-size: 16px;
  }

  ul {
    padding-left: 1em;
  }

  .avatar {
    margin: 10px auto;
    display: block;
    box-shadow: 1px 1px 5px #666;
  }

  .author-info {
    text-align: center;
  }

  .play_box{
    width:200px;
    height:200px;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    text-align:center;
    line-height:200px;
  }
  .play_box i{
    font-size:100px;
  }
  .swiper-pagination-custom{
    bottom:35%;
  }
  h1{
    margin-top:20px;
  }
  .text-center img{
    width:380px;
    height:220px;
  }
  .video_box{
    width:780px;
    height:auto;
    margin:20px auto;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .video_box .video{
    width:230px;
    height:230px;
    margin:10px 15px;
    cursor:pointer;
  }
  .video_box .video img{
    width:100%;
    height:100%;
  }
  .projection{
    width:780px;
    height:20px;
    margin:80px auto 0px;
    background:url(../../../static/images/ying.png) no-repeat;
    background-size:100% 100%;
  }
  .swiper-container{
    height:100%;
  }
  .swiper-container .swiper-wrapper{
    height:100%;
  }
  .swiper-container .swiper-wrapper .swiper-slide{
    height:100%;
  }
  .list_box{
    width:880px;
    height:auto;
    margin:20px auto;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .list_box .list{
    width:190px;
    height:370px;
    margin:10px 15px;
    cursor:pointer;
  }
  .list_box .list img{
    width:100%;
    height:100%;
  }
  .moment_box{
    width:880px;
    height:auto;
    margin:20px auto;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .moment_box .moment{
    width:270px;
    height:180px;
    margin:10px 10px;
    cursor:pointer;
  }
  .moment_box .moment img{
    width:100%;
    height:100%;
  }
  .projections{
    width:880px;
    height:20px;
    margin:-300px auto;
    background:url(../../../static/images/ying.png) no-repeat;
    background-size:100% 100%;
  }
  .partner_box{
    width:880px;
    height:auto;
    margin:20px auto;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .partner_box .partner{
    width:260px;
    height:110px;
    margin:10px 15px;
    cursor:pointer;
  }
  .partner_box .partner img{
    width:100%;
    height:100%;
  }
  .seven{
    width:880px;
    height:auto;
    margin:100px auto 0px;
  }
  .seven .content .erwei{
    width:100%;
    height:280px;
  }
  .seven .content .erwei dl{
    width:30%;
    height:100%;
    float:left;
    padding:0 0 0 60px;
  }
  .seven .content .erwei dl dt{
    width:100%;
    height:200px;
  }
  .seven .content .erwei dl dt img{
    width:200px;
    height:200px;
  }
  .seven .content .erwei dl dd{
    color:#fff;
    text-align:left;
    padding:10px;
    line-height:20px;
  }
  .seven .content .text{
    width:100%;
    height:330px;
    margin-top:20px;
    color:#fff;
    padding:0 70px;
  }
  .seven .content .text .top{
    width:100%;
    height:50px;
    text-align:left;
  }
  .seven .content .text .top p:nth-child(1){
    float:left;
  }
  .seven .content .text .top p:nth-child(2){
    float:right;
    padding-right:20px;
  }
  .seven .content .text .middle {
    width: 100%;
    height: 180px;
    margin-top:20px;
  }
  .seven .content .text .middle div{
    float:left;
    width:33.3%;
  }
  .seven .content .text .middle div p{
    text-align:left;
  }
  .seven .content .text .middle .right p{
    text-align:right!important;
    padding-right:30px;
    margin-bottom:20px;
  }
  .seven .content .text .middle .iconfont{
    padding-right:10px;
  }
  .seven .content .text .middle .qqp{
    margin-top:53px;
  }
  .seven .content .text .bottom{
    width:100%;
    height:50px;
    line-height:50px;
    font-size:18px;
    margin-top:30px;
    text-align:center;
  }
  .seven .content .text .middle .center{
    padding-left:80px;
  }
  .animationimg{
    width:100%;
    height:100%;
    animation:play 15s linear infinite;
    position:absolute;
    left:0;
    top:0;
  }
  .animationimgs{
    width:100%;
    height:100%;
    animation:plays 10s linear infinite;
    position:absolute;
    left:0;
    top:0;
  }
  @-webkit-keyframes play{
    0%  {
      /*
      水平翻转
      */
      /*-webkit-transform:rotateZ(0deg);*/

      /*!*垂直翻转*/
      -webkit-transform:rotateY(0deg);
      /*顺时针旋转*/
      /*-webkit-transform:rotateZ(0deg);*/
      /*逆时针旋转*/
      /*-webkit-transform:rotate(0deg);*/
    }
    100% {
      /* 水平翻转 */
      /*-webkit-transform:rotateZ(360deg);*/
      /*!* 垂直翻转*/
      -webkit-transform:rotateY(360deg);
      /*顺时针旋转*!*/
      /*-webkit-transform:rotateZ(360deg);*/
      /*逆时针旋转*/
      /*-webkit-transform:rotate(-360deg);*/

    }

  }
  @-webkit-keyframes plays {
    0% {
      /*
      水平翻转
      */
      /*-webkit-transform: rotateZ(360deg);*/
      /*
      /*垂直翻转*/
      -webkit-transform:rotateY(360deg);
      /*顺时针旋转*/
      /*-webkit-transform:rotate(0deg);*/
      /*逆时针旋转*/
      /*-webkit-transform:rotate(0deg);*/
    }
    100% {
      /* 水平翻转 */
      /*-webkit-transform: rotateZ(0deg);*/
      /*!* 垂直翻转*/
      -webkit-transform:rotateY(0deg);
      /*顺时针旋转*/
      /*-webkit-transform:rotate(360deg);*/
      /*逆时针旋转*/
      /*-webkit-transform:rotate(-360deg);*/
    }
  }
  canvas{
    position:absolute;
    left:0;
    top:0;
    z-index:-99;
  }
</style>
