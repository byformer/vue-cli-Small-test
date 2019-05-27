<template>
  <div id="index">
  <mt-header fixed  class="fs1-2" title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
       <!--  <div><icon class="search2" name="search2" ></icon></div> -->
      </router-link>
      <mt-button class="fs0-8" slot="right">登录|注册</mt-button>
    </mt-header>

    <div class="padtop40">
      <mt-swipe class="myswipe" :auto="0">
  
      </mt-swipe>

      <div class="mgtop10 bgfff maindiv">
        <div class="ih30 pad10">
          <div class="svgbox left">
       <!--      <icon name="shop" class="shopicon"></icon> -->
          </div>
          <div class="fs0-8 left col9f mgleft10">
            附近商家
          </div>
        </div>

        <div class="shoplist after">
            <div class="shopimgbox">
                <img >
            </div>
            <div class="rightbox">
                <div class="shoptop">
                  <span class="pinpai fs10 mgl">品牌</span>
                  <span class="shopname">周哈黑鸭</span>
                  <span class="rightspan right fs10 mgr"><span class="">保</span><span class="">准</span><span class="">票</span></span>
                </div>
                <div class="xxdiv">
                  <div class="xxbox fs10 mgl">
                    <span><!-- <icon name="meishi" class="meishi"></icon> --></span>
                    <span><!-- <icon name="bianli" class="bianli"></icon> --></span>
                    <span><!-- <icon name="shuiguo" class="shuiguo"></icon> --></span>
                    <span class="xxspan1"><!-- <icon name="xx2" class="xx"></icon> --><span class="xxspan2 w5"><!-- <icon name="xx" class="xx"></icon> --></span></span>
                    <span><!-- <icon name="xx2" class="xx"></icon> --></span>
                  </div>
                  <span class="colred fs10 mgl mgleft8">4.4</span>
                  <span class="fs10 mgl">月售125单</span>
                  <span class="rightspan fs10 right mgr">
                      <span class="fn ">蜂鸟专送</span>
                      <span class="zs ">准时达</span>
                  </span>
                </div>
                <div class="shopfoot">
                    <div><span class="fs10 mgl">￥20起送/配送费约￥5</span></div>
                    <div><span class="right fs10 mgr"><span class="">102.3公里/</span><span class="col">15小时21分钟</span></span></div>
                </div>
            </div>
        </div>

        <div class="shoplist after">
            <div class="shopimgbox">
                <img >
            </div>
            <div class="rightbox">
                <div class="shoptop">
                  <span class="pinpai fs10 mgl">品牌</span>
                  <span class="shopname">周哈黑鸭</span>
                  <span class="rightspan right fs10 mgr"><span class="">保</span><span class="">准</span><span class="">票</span></span>
                </div>
                <div class="xxdiv">
                  <div class="xxbox fs10 mgl">
                    <span><!-- <icon name="xx" class="xx"></icon> --></span>
                    <span><!-- <icon name="xx" class="xx"></icon> --></span>
                    <span><!-- <icon name="xx" class="xx"></icon> --></span>
                    <span class="xxspan1"><!-- <icon name="xx2" class="xx"></icon> --><span class="xxspan2 w5"><!-- <icon name="xx" class="xx"></icon> --></span></span>
                    <span><!-- <icon name="xx2" class="xx"></icon> --></span>
                  </div>
                  <span class="colred fs10 mgl mgleft8">4.4</span>
                  <span class="fs10 mgl">月售125单</span>
                  <span class="rightspan fs10 right mgr">
                      <span class="fn ">蜂鸟专送</span>
                      <span class="zs ">准时达</span>
                  </span>
                </div>
                <div class="shopfoot">
                    <div><span class="fs10 mgl">￥20起送/配送费约￥5</span></div>
                    <div><span class="right fs10 mgr"><span class="">102.3公里/</span><span class="col">15小时21分钟</span></span></div>
                </div>
            </div>
        </div>

        <div class="shoplist after">
            <div class="shopimgbox">
                <img >
            </div>
            <div class="rightbox">
                <div class="shoptop">
                  <span class="pinpai fs10 mgl">品牌</span>
                  <span class="shopname">周哈黑鸭</span>
                  <span class="rightspan right fs10 mgr"><span class="">保</span><span class="">准</span><span class="">票</span></span>
                </div>
                <div class="xxdiv">
                  <div class="xxbox fs10 mgl">
                    <span><!-- <icon name="xx" class="xx"></icon> --></span>
                    <span><!-- <icon name="xx" class="xx"></icon> --></span>
                    <span><!-- <icon name="xx" class="xx"></icon> --></span>
                    <span class="xxspan1"><!-- <icon name="xx2" class="xx"></icon> --><span class="xxspan2 w5"><!-- <icon name="xx" class="xx"></icon> --></span></span>
                    <span><!-- <icon name="xx2" class="xx"></icon> --></span>
                  </div>
                  <span class="colred fs10 mgl mgleft8">4.4</span>
                  <span class="fs10 mgl">月售125单</span>
                  <span class="rightspan fs10 right mgr">
                      <span class="fn ">蜂鸟专送</span>
                      <span class="zs ">准时达</span>
                  </span>
                </div>
                <div class="shopfoot">
                    <div><span class="fs10 mgl">￥20起送/配送费约￥5</span></div>
                    <div><span class="right fs10 mgr"><span class="">102.3公里/</span><span class="col">15小时21分钟</span></span></div>
                </div>
            </div>
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
 



  },
  computed:{
  //计算属性

  },
 methods: {

}
  }
</script>
/* !!!!!!!!!!!!!! */
<style scoped>
.fs10{
  font-size: 12px;
  transform: scale(.8);
  display:inline-block;
}
.mgr{
  transform-origin:100% 50% 0;/*改变缩放基点*/
}
.mgl{
  transform-origin:0 50% 0;/*改变缩放基点*/
}
.myswipe{
  height:210px;
  box-sizing:border-box;
  padding-bottom:30px;
  padding-top:10px;
  background-color:#ffffff;
  border-bottom:1px solid #E4E4E4;
}
.myswipe .mint-swipe-indicators .is-active{
  background-color:#26a2ff;
}

.myitem>div{
  width:25%;
  height:50%;
  box-sizing:border-box;
  float:left;
  text-align:center;
}
.imgbox{
  height:60%;
}
.imgbox img{
  height:100%;
}
.shopicon{
  width:100%;
  height:100%;
  margin-bottom:-2px;
}
.svgbox{
  width:15px;
  height:15px;
}
.mgleft10{
  margin-left:10px;
}
.shoplist{
  padding:10px;
  overflow: hidden;
  display:flex;
}
.shoplist>div{
  float:left;
}
.shopimgbox{
  width:60px;
  height:60px;
  margin-right:5px;
}
.shopimgbox>img{
  height:100%;
  width:100%;
  background-color:red;
}
.maindiv{
  border-top:1px solid #E4E4E4;
}

.search2{
  width:20px;
  height:20px;
}
.rightbox{
  font-size:0.8rem;
  flex:1;
}
.shoptop,.xxdiv{
  height:25px;
  line-height:25px;
}
.pinpai{
  display:inline-block;
  width:30px;
  text-align:center;
  font-weight:bold;
  height:20px;
  line-height:20px;
  background-color:#ffd930;
  border-radius:3px;
}
.shopname{
  font-weight:bold;
  font-size:0.8rem;
}
.rightspan>span{
  display:inline-block;
  height:14px;
  border:1px solid #A3ACB7;
  margin-left:3px;
  padding:1px;
  color:#A3ACB7;
  line-height:14px;
  font-size:12px;
}

.xx{
  width:10px;
  height:10px;
  
}
.xxbox{
  display:inline-block;
  height:25px;
  box-sizing:border-box;
}
.xxbox>span{
    margin-right:-2px;
}
.xxspan1{
  position:relative;
  display:inline-block;
}
.xxspan2{
  display:inline-block;
  position:absolute;
  left:0px;
  overflow: hidden;
}
.w1{
  width:10%;
}
.w2{
  width:20%;
}
.w3{
  width:30%;
}
.w4{
  width:40%;
}
.w5{
  width:50%;
}
.w6{
  width:60%;
}
.w7{
  width:70%;
}
.w8{
  width:80%;
}
.w9{
  width:90%;
}
.fn{
  background-color:#3190E8;
  color:white !important;
  border-color:#3190E8 !important;
}
.zs{
  color:#3190E8 !important;
   border-color:#3190E8 !important;
}
.mgleft8{
  margin-left:-8px;
}
.shopfoot>div{
  width:50%;
  float:left;
}
</style>


