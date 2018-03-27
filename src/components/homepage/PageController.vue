<template>
  <nav class="controller">
    <!--<button v-if="option.arrowsType" class="prev-btn" :class="{moving:option.arrowsType === 'animate'}" @click="changePage(prevIndex)"></button>-->
    <ul v-if="option.navbar">
      <li v-for="index in pageNum" @click="changePage(index)" :class="{current:option.highlight && index === currentPage}" :key="'controller-'+index" :data-index="index" class="controller-item"></li>
    </ul>
    <button v-if="option.arrowsType" v-show="flag" class="next-btn s-xguide-down trans" :class="{moving:option.arrowsType === 'animate'}" @click="changePage(nextIndex)"></button>
    <button v-if="option.arrowsType" v-show="flag" class="s-xguide-down arrow-1 trans" :class="{moving:option.arrowsType === 'animate'}" @click="changePage(nextIndex)"></button>
  </nav>
</template>

<script>
  export default {
    name: 'page-controller',
    data(){
      return {
        flag:true
      }
    },
    props: {
      pageNum: Number,
      currentPage: Number,
      option: {
        type: Object,
        default: {
          //arrowsType: 'animate',
          navbar: true,
          highlight: true,
          loop: true //是否开启滚动循环
        }
      }
    },
    methods: {
      changePage (index) {
        this.$emit('changePage', index);
        if(index==7){
          this.flag=false
        }else{
          this.flag=true
        }
      }
    },
    computed: {
      nextIndex () {
        if (this.currentPage === this.pageNum) {
          if(this.option.loop){
            return 1
          }else{
            return this.pageNum
          }
        } else {
          return this.currentPage + 1;
        }
      },
      prevIndex () {
        if (this.currentPage === 1) {
          if(this.option.loop){
            return this.pageNum
          }else{
            return 1
          }
        } else {
          return this.currentPage - 1;
        }
      }
    },
    created () {
      if (this.option.navbar === undefined) {
        this.option.navbar = true;
      }
    },
    mounted () {
      let _this = this;
      let timer = null;
      let start = 0;
      // 滚轮处理
      function scrollHandler (direction) {
        // 防止重复触发滚动事件
        if (timer != null) {
          return;
        }
        if (direction === 'down') {
          _this.changePage(_this.nextIndex);
        } else {
          _this.changePage(_this.prevIndex);
        }
        timer = setTimeout(function() {
          clearTimeout(timer);
          timer = null;
        }, 300);
      }
      // if (Object.hasOwnProperty.call(window,'onmousewheel')) {
      if (Object.hasOwnProperty.call(window,'onmousewheel')) {
        // 监听滚轮事件
        window.addEventListener('mousewheel',function (event) {   // IE/Opera/Chrome
          let direction = event.wheelDelta > 0 ? 'up':'down';
          scrollHandler(direction);
        },false);
      } else {
        window.addEventListener('DOMMouseScroll',function (event) {   // Firefox
          let direction = event.detail > 0 ? 'up':'down';
          scrollHandler(direction);
        },false);
      }
      // 移动端触摸事件处理
      window.addEventListener('touchstart', function (event) {
        start = event.touches[0].clientY;
      })
      window.addEventListener('touchmove', function (event) {
        event.preventDefault();
      })
      window.addEventListener('touchend', function (event) {
        let spacing = event.changedTouches[0].clientY - start;
        let direction;
        if (spacing > 50) {
          direction = 'up';
          scrollHandler(direction);
        } else if (spacing < -50) {
          direction = 'down';
          scrollHandler(direction);
        }
      })
    }
  }
</script>

<style scoped>
  .controller {
    position: fixed;
    right: 20px;
    top: 50%;
    z-index: 99;
  }
  .controller ul {
    transform: translate3d(0,-50%,0);
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .controller-item {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-top: 10px;
    border: 2px solid #0093f1;
    transition: background-color 0.3s ease 0s;
  }

  .controller-item:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
  .controller-item.current {
    background-color: #0093f1;
  }
  .controller-item.current:after{
    content:"";
    width:5px;
    height:50px;
    background:#fff;
  }
  .prev-btn {
    top: 80px;
    transform: rotate(-45deg);
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  .prev-btn.moving {
    animation: prev-up-down 0.7s linear 0s infinite;
  }
  .next-btn.moving {
    animation: next-up-down 0.7s linear 0s infinite;
  }
  @keyframes next-up-down {
    0% {
      transform: translate3d(0,0,0) rotate(45deg);
    }
    25% {
      transform: translate3d(0,6px,0) rotate(45deg);
    }
    50% {
      transform: translate3d(0,0,0) rotate(45deg);
    }
    75% {
      transform: translate3d(0,-6px,0) rotate(45deg);
    }
    100% {
      transform: translate3d(0,0,0) rotate(45deg);
    }
  }
  @keyframes prev-up-down {
    0% {
      transform: translate3d(0,0,0) rotate(-45deg);
    }
    25% {
      transform: translate3d(0,-6px,0) rotate(-45deg);
    }
    50% {
      transform: translate3d(0,0,0) rotate(-45deg);
    }
    75% {
      transform: translate3d(0,6px,0) rotate(-45deg);
    }
    100% {
      transform: translate3d(0,0,0) rotate(-45deg);
    }
  }
  .s-xguide-down{
    width:50px;
    height:50px;
    display:inline-block;
    position:fixed;
    bottom:50px;
    left:50%;
    background:url("../../../static/images/next.png") no-repeat;
    background-size:100% 100%;
    _background:none;
    _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="../../../static/images/next.png",enabled=true,sizingMethod="crop");
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    -o-border-radius:50%;
    opacity:.7;
    cursor:pointer;
    border:0;
    outline:none;
  }
  @keyframes xguide_down{
    0%,100%{
      transform:scale(0.0);
      -moz-transform:scale(0.0);
      -o-transform:scale(0.0);
      -webkit-transform:scale(0.0);
      -ms-transform:scale(0.0);
      opacity:0
    }
    50%{
      transform:scale(1.0);
      -moz-transform:scale(1.0);
      -o-transform:scale(1.0);
      -webkit-transform:scale(1.0);
      -ms-transform:scale(1.0);
      opacity:1
    }

  }
  @-webkit-keyframes xguide_down{
    0%,100%{
      -webkit-transform:scale(0.0);
      -moz-transform:scale(0.0);
      -o-transform:scale(0.0);
      -ms-transform:scale(0.0);
      transform:scale(0.0);
      opacity:0
    }
    50%{
      -webkit-transform:scale(1.0);
      -moz-transform:scale(1.0);
      -o-transform:scale(1.0);
      -ms-transform:scale(1.0);
      transform:scale(1.0);
      opacity:1
    }

  }
  @-moz-keyframes xguide_down{
    0%,100%{
      -moz-transform:scale(0.0);
      -o-transform:scale(0.0);
      -webkit-transform:scale(0.0);
      -ms-transform:scale(0.0);
      transform:scale(0.0);
      opacity:0
    }
    50%{
      -moz-transform:scale(1.0);
      -o-transform:scale(1.0);
      -webkit-transform:scale(1.0);
      -ms-transform:scale(1.0);
      transform:scale(1.0);
      opacity:1
    }

  }
  @-o-keyframes xguide_down{
    0%,100%{
      -o-transform:scale(0.0);
      -moz-transform:scale(0.0);
      -webkit-transform:scale(0.0);
      -ms-transform:scale(0.0);
      transform:scale(0.0);
      opacity:0
    }
    50%{
      -o-transform:scale(1.0);
      -moz-transform:scale(1.0);
      -webkit-transform:scale(1.0);
      -ms-transform:scale(1.0);
      transform:scale(1.0);
      opacity:1
    }

  }
  .s-xguide-down.trans{
    -webkit-animation:xguide_down 4.0s infinite ease-in-out;
    -moz-animation:xguide_down 4.0s infinite ease-in-out;
    -o-animation:xguide_down 4.0s infinite ease-in-out;
    animation:xguide_down 4.0s infinite ease-in-out
  }
  .s-xguide-down.arrow-1{
    animation-delay:-2.0s;
    -webkit-animation-delay:-2.0s;
    -moz-animation-delay:-2.0s;
    -o-animation-delay:-2.0s
  }
  .line{
    width:3px;
    height:50px;
    background:#007aff;
  }
</style>
