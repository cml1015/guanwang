<template>
    <div class="joinus">
      <div class="joinbanner"></div>
      <div class="joincontent">
        <div class="jointitle">
          <h6>简历投递至 hr@datalove.cn</h6>
          <p>丰富的团建活动，五险一金齐全，卧虎藏龙的同事伙伴，完善的福利制度。</p>
          <p>你有能力，我们相互学习，你没经验，我们共同进步。</p>
        </div>
        <div class="jointext">
          <div class="texttitle">
            <p>职位名称</p>
            <p>职位类别</p>
            <p>工作地点</p>
            <p>查看</p>
          </div>
          <ul>
            <li>
              <p>Android开发工程师</p>
              <p>人工智能</p>
              <p>北京</p>
              <p @click="toggle($event)">展开</p>
            </li>
            <span class="intro" v-show="isShow">岗位职责：负责Tiger OS的kernel、framework、进程管理和内存
                管理的优化和改进 · 负责Tiger OS的品牌标识化控件的开发 岗位要求： · 具有4年以上ROM开
                发经验，精通Android ROM架构 · 熟悉Android的系统应用3. 精通Java，C，C++ · 能熟练
                的分析和定位ROM中的问题 · 熟悉Android系统性能和内存优化 · 优秀的学习能力，分析和解决
                问题的能力和强烈的进取心，具备良好的沟通能力和团队合作精神 · 有互联网手机公司工作经历的
                优先</span>
          </ul>
        </div>
      </div>
      <Footers/>
    </div>
</template>

<script>
  import Footers from "../Footer/Footers"
    export default {
        name: "joinus",
        data:function(){
          return{
            "isShow":false
          }
        },
        components:{
          Footers
        },
        created(){
          this.menu();
        },
        methods:{
            toggle:function($event){
              this.isShow=!this.isShow
            },
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
  .joinbanner{
    width:100%;
    height:300px;
    background:url("../../../static/images/aboutbanner.png") no-repeat;
    background-size:100% 100%;
  }
  .joincontent{
    width:880px;
    height:auto;
    margin:0 auto;
  }
  .joincontent .jointitle{
    width:100%;
    height:150px;
    text-align:center;
    padding:30px 0px;
    background:url("../../../static/images/bgline.png") no-repeat center 80%;
    background-size:80px;
  }
  .joincontent .jointitle h6{
    font-size:16px;
    margin-bottom:10px;
  }
  .joincontent .jointitle p{
    color:#959595;
  }
  .joincontent .jointext{
    width:100%;
    height:auto;
    margin-bottom:30px;
  }
  .joincontent .jointext .texttitle{
    width:100%;
    height:60px;
    line-height:60px;
    display:flex;
    text-align:center;
    border:1px solid #e1e1e1;
  }
  .joincontent .jointext .texttitle p{
    flex:1;
  }
  .joincontent .jointext ul{
    width:100%;
    height:auto;
  }
  .joincontent .jointext ul li{
    width:100%;
    height:60px;
    border:1px solid #e1e1e1;
    display:flex;
    text-align:center;
  }
  .joincontent .jointext ul li p{
    flex:1;
    line-height:60px;
  }
  .joincontent .jointext ul li p:last-child{
    color:#4597f2;
    cursor:pointer;
  }
  .joincontent .jointext ul .intro{
    width:100%;
    height:130px;
    color:#8a8a8a;
    background:#f8f8f8;
    display:inline-block;
    padding:15px 20px;
    line-height:25px;
  }
</style>
