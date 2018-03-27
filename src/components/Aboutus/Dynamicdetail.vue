<template>
    <div class="dynamicdetail">
      <div class="dynamicdetailcontent">
        <div class="dynamicdetailtitle">
          <h6>{{list.detailtitle}}</h6>
          <p><span>发布：{{list.time}}</span><i class="iconfont icon-liulan"></i><span>{{list.num}}</span></p>
        </div>
        <div class="dynamicdetailtext">
          <p>{{list.text1}}</p>
          <div class="detaila"><img v-bind:src="list.imgSrca" alt=""></div>
          <p>{{list.text2}}</p>
          <p>{{list.text3}}</p>
          <div class="detaila"><img v-bind:src="list.imgSrcb" alt=""></div>
          <div class="bottom">
            <div class="left">
              <a>上一篇：首届“潇湘老年照护高峰论坛”在长沙举办</a>
              <a>下一篇：长沙市举办第一期养老机构照护需求评估员培训班</a>
            </div>
            <div class="right">
              <button @click="back">返回列表</button>
            </div>
          </div>
        </div>
      </div>
      <Footers/>
    </div>
</template>

<script>
  import Footers from  "../Footer/Footers"
  export default {
    name: "dynamicdetail",
    components:{
      Footers
    },
    data(){
      return {
        list:{}
      }
    },
    created(){
      this.menu();
      this.fetchdata();
    },
    methods:{
      menu(){
        window.scrollTo(0,0)
      },
      back:function(){
        this.$router.back(-1)
      },
      fetchdata(){
        this.id=this.$route.params.id;
        this.$http.get('http://192.168.1.140:8080/api/dynamic',{id:this.$route.params.id}).then(res=>{
          this.list=res.data.data;
          for(var i=0;i<this.list.length;i++){
            if(this.list[i].id==this.id){
              this.list=this.list[i]
            }
          }
          console.log(this.list)
        });
      },
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
  .dynamicdetailcontent{
    width:880px;
    height:auto;
    margin:0 auto;
  }
  .dynamicdetailcontent .dynamicdetailtitle{
    width:100%;
    height:150px;
    text-align:center;
    padding:30px 0px;
    background-size:80px;
  }
  .dynamicdetailcontent .dynamicdetailtitle h6{
    font-size:18px;
    margin-bottom:10px;
    font-weight:bold;
  }
  .dynamicdetailcontent .dynamicdetailtitle p{
    color:#959595;
  }
  .dynamicdetailcontent .dynamicdetailtitle p .iconfont{
    padding:0 10px;
  }
  .dynamicdetailcontent .dynamicdetailtext{
    width:100%;
  }
  .dynamicdetailcontent .dynamicdetailtext p{
    color:#9a9a9a;
    padding:0px 0px 30px;
    line-height:25px;
    font-size:16px;
  }
  .dynamicdetailcontent .dynamicdetailtext .detaila{
    width:500px;
    height:350px;
    margin:0 auto;
    margin-bottom:20px;
  }
  .dynamicdetailcontent .dynamicdetailtext .detaila img{
    width:100%;
    height:100%;
  }
  .dynamicdetailcontent .dynamicdetailtext .bottom{
    width:100%;
    height:100px;
    margin-bottom:20px;
  }
  .dynamicdetailcontent .dynamicdetailtext .bottom .left{
    float:left;
  }
  .dynamicdetailcontent .dynamicdetailtext .bottom .left a{
    display:block;
    padding:10px 20px;
    color:#9a9a9a;
    cursor:pointer;
  }
  .dynamicdetailcontent .dynamicdetailtext .bottom .right{
    float:right;
  }
  .dynamicdetailcontent .dynamicdetailtext .bottom .right button{
    margin-top:20px;
    width:120px;
    height:40px;
    background:none;
    border:1px solid #d6d7dc;
    color:#9a9a9a;
    font-size:16px;
    outline:none;
  }
</style>
