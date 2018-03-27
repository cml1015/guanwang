<template>
    <div class="prolist">
      <div class="prolistbanner"></div>
      <div class="procontent">
        <div class="protext">
          <h6>{{list.title}}</h6>
          <p>{{list.content}}</p>
        </div>
      </div>
      <Footers/>
    </div>
</template>

<script>
  import Footers from "../Footer/Footers"
    export default {
        name: "prolist",
        components:{
          Footers
        },
        data(){
          return {
            id:"",
            list:[]
          }
        },
      created(){
        this.fetchdata();
        this.menu();
      },
      methods:{
        fetchdata(){
          this.id=this.$route.params.id;
          this.$http.get('http://192.168.1.140:8080/api/data',{id:this.$route.params.id}).then(res=>{
            this.list=res.data.data;
            for(var i=0;i<this.list.length;i++){
                if(this.list[i].id==this.id){
                  this.list=this.list[i]
                }
            }
            console.log(this.list)
          });
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
  .prolistbanner{
    width:100%;
    height:300px;
    background:url("../../../static/images/prolist.png") no-repeat;
    background-size:100% 100%;
  }
  .procontent{
    width:880px;
    margin:0 auto;
    padding:20px;
    margin-bottom:54px;
  }
  .procontent .protext h6{
    width:100%;
    height:30px;
    line-height:30px;
    font-weight:bold;
    text-align:center;
    font-size:16px;
    margin:10px 0px;
  }
  .procontent .protext p{
    line-height:25px;
    color:#999;
  }


</style>
