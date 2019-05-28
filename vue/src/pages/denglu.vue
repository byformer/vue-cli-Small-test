<!-- <template>
    <div id="indexs" >
      <img class="he56" src="/static/bj2.png">
    </div>
</template> -->


<template>
    <div class="forgrtCode">
        <mt-header title="忘记密码" class="headerBox">
            <mt-button
                    icon="back"
                    slot="left"
                    class="backBox"
                    @click="backAction">返回</mt-button>
        </mt-header>
 
        <div class="codeInputBox">
            <!--手机号-->
            <mt-field
                    class=" mgtop10 after"
                    type="tel"
                    v-model="phoneNum"
                    placeholder="手机号"
                    :attr="{maxlength:11}"
            >
            </mt-field>
 
            <!--验证码-->
            <div class="codeBox">
                <mt-field   class=" mgtop10 after" type="tel" v-model="codeNum" placeholder="验证码" :after="{maxlength:11}">
                </mt-field>
          
                <!--/倒计时触发按钮-->
                <mt-button
                        class="codeBtn"
                        :class="{hwDisables:captchaDisable}"
                        type="default"
                        @click="codeBtnAction"
                        v-bind:disabled="captchaDisable"
                >{{captchaLabel}}</mt-button>
            </div>
        </div>
 
        <!--注册-->
        <mt-button
                class="nextBottomBtn"
                type="default"
                @click.native="registerBottomBtnAction"
                v-bind:disabled="isClickAble">
        下一步</mt-button>
 
    </div>
</template>


<style scoped>
  .he56{
      height:56px;
      max-width:100%;
      padding:20px 0px 0px 0px;
  }
 #indexs{
     display:flex;
     justify-content: center;
 }

   .forgrtCode{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: white;
    }
    .forgrtCode .headerBox{
        background: #26a2ff !important;
    }
    /*输入框*/
    .codeInputBox{
        margin-top: 60px;
    }
    .registerBox .inputBox{
        padding: 0 20px;
        margin-top: 20px;
    }
    /*普通状态*/
    .forgrtCode .phoneNum input{
        border-color: white;
        border-radius: 0 ;
        border-bottom: 1px solid #eeeeee ;
        width: 80%;
        margin-left: 10%;
        margin-top: 10px;
    }
    /*高亮状态下面添加直线*/
    .forgrtCode .phoneNum :focus{
        border-bottom: 1px solid #26a2ff ;
        padding-right: 100px;
 
    }
 
    /*验证码容器*/
    .forgrtCode .codeBox{
        margin-top: 20px;
        width:80%;
        margin-left: 10%;
        position: relative;
    }
    /*输入框普通状态*/
    .forgrtCode .codeNum input{
        border-color: white;
        border-radius: 0 ;
        border-bottom: 1px solid #eeeeee ;
    }
    /*高亮状态下面添加直线*/
    .forgrtCode .codeNum :focus{
        border-bottom: 1px solid #26a2ff ;
 
    }
    .forgrtCode .codeBox .codeNum{
        margin-right: 10px !important;
 
    }
    .forgrtCode .codeBox .codeBtn{
        position: absolute;
        right: 0;
        top: 0;
        font-size: 13px;
        height: 32px;
        color: white;
        background: #26a2ff;
    }
 
    /*按钮*/
    .nextBottomBtn{
        margin-top: 40px;
        width: 80%;
        margin-left: 10%;
        background: #26a2ff !important;
        color: white;
    }
 
</style>

<script>
import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
  
    import {Toast} from 'mint-ui'
    export default {
 
        data:function () {
          return {
              phoneNum:'',
              codeNum:'',
              captchaLabel:"获取验证码",
              seconds:15,
              captchaDisable:false,
          }
        },
        methods:{
            //导航返回
            backAction:function () {
                this.$router.back()
            },
            //获取验证码点击
            codeBtnAction:function () {
                if(this.phoneNum==""){
                    Toast('请填写手机号!');
                    return;
                }
                //发送网络请求
//                this.codeBtnActionAPI();
 
                this.captchaDisable = true;
                //立即显示重发提示不必等待倒计时启动
                this.captchaLabel =this.seconds+'秒后重新发送';
 
                //启动1s步长倒计时
                var interval = setInterval(()=>{
                    kTimer.countdown(this)
                    console.log(this.seconds)
 
                    if(this.seconds == 15){
                        //停止倒计时
                        clearTimeout(interval)
                    }
                 
                },1000);
            }
        },
 
        computed:{
            isClickAble:function () {
                if(this.phoneNum!==''&&this.codeNum!==''){
                    return false
                }
                return true;
            }
        }

 
    }


</script>
