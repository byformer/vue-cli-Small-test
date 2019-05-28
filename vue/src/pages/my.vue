<template>
  <div>
    
        <mt-header fixed>
            <span slot="left">elm</span>
            <mt-button @click="go" slot="right">登录|注册</mt-button>
            
        </mt-header>
    

    <div class="padtop40">
      <div class="after ih50 padlr10 box bgfff">
        <span  class="">当前选择城市</span>
        <span  class="right fs0-8 col9f">定位不准时，请在城市列表选择</span>
      </div>
      <mt-cell  :title="nowcity.name" class="col after" to=""  is-link  value=""></mt-cell>

      <div class="mgtop10 bgfff">
        <mt-cell class="after" title="热门城市"></mt-cell>
        <div class="itembox ovhid col">
          <div @click="gocity" v-for="item in hotcity " v-bind:key="item.id">{{item.name}}</div>
        </div>        
      </div>         

      <div v-for="(items,index) in getlist"  v-bind:key="index"  class="mgtop10 bgfff" >
        <mt-cell class="after" :title="index"></mt-cell>
        <div class="itembox ovhid">
          <div class="nowarp" v-for="item in items" v-bind:key="item.id">{{item.name}}</div>
        </div>        
      </div>  
  
    </div>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
      citylist:"",
      hotcity:"",
      nowcity:""
    }
  },
  component:{
  //注册组件

  },
  mounted:function(){
  //生命周期
      //城市列表
      this.$http.get('http://cangdu.org:8001/v1/cities?type=group').then(response => {
        
        this.citylist=response.body;
      }, response => {
     
        
      });
      //热门城市
      this.$http.get('http://cangdu.org:8001/v1/cities?type=hot').then(response => {
      
        this.hotcity=response.body;
      }, response => {
     
        
      });
      //定位城市
      this.$http.get('http://cangdu.org:8001/v1/cities?type=guess').then(response => {
        
        this.nowcity=response.body;
      }, response => {
      
        
      });

  },
  computed:{
  //计算属性
      getlist:function(){
        var mycitylist={};
          for(var i=65;i<=90;i++){
            var num= String.fromCharCode(i);
            mycitylist[num]=this.citylist[num];
          }
          return mycitylist
      }
  },
 methods: {
go() {
this.$router.push('/logins');//要跳转的界面
     },
   gocity:function(){
      this.$router.push('city');
      /* this.$store.state.nowcity = e; */
   },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itembox>div{
  width:25%;
  float:left;
  text-align:center;
  height:40px;
  line-height:40px;
  box-sizing: border-box;
  border-right:1px solid #e4e4e4;
  border-bottom:1px solid #e4e4e4;
}
.itembox>div:nth-child(4n){
  border-right:0px;
}
.nowarp{
    white-space:nowrap;          /* 不换行 */
    overflow:hidden;               /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;   /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
}
</style>