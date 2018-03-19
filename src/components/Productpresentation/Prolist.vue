<template>
    <div class="prolist">
      <div class="prolistbanner"></div>
      <div class="procontent">
        <router-view></router-view>
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
        data:{
          id:"",
          list:[]
        },
        created(){
          this.id=this.$route.query.id;
          this.$http.post('http://localhost:8080/api/data',{
            id:this.id
          }).then((response) => {
            this.list=response.data
            console.log(this.list.data+"------")
          })
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
  .democontent{
    width:880px;
    height:auto;
    margin:0 auto;
  }


</style>
