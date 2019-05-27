<template>
  <div id="index">
    <section data-v-1ec2d114="" class="node" style="">
      <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png"> 
    <h3>登录后查看外卖订单</h3> 
    <mt-button @click="deng">立即登录</mt-button>
  </section>
  </div>
</template>
<style scoped>
 .node{
   display:flex;
   justify-content: center;
   flex-flow: column;
   align-items: center;
   margin-top:26vw;
 }

 .node img{
   width:53vw;
 }
 .node h3{
   text-align: center;
   font-weight: 300;
   color:#6a6a6a;
 }
 .node button{
   padding:2.6vw;
   min-width:32vw;
   border:none;
    border-radius: .533333vw;
    background-color: #56d176;
    color: #fff;
    text-align: center;
    font-size: 1em;
    font-family: inherit;
 }
</style>
<script>
 
export default {
  data () {
    return {
      
    }
  },
  component:{
  //注册组件

  },
  mounted:function(){
  //生命周期
      //城市列表


  },
  computed:{
  //计算属性

  },
 methods: {
deng() {
this.$router.push('/denglu');//要跳转的界面
     },
   gocity:function(){
      this.$router.push('deng');
      /* this.$store.state.nowcity = e; */
   },
}
}
</script>
