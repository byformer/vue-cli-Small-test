<template>
 <div>
    <mt-header title="密码登录" class='fs1-2' fixed>
        <mt-button slot="left" @click="my"><mt-button icon="back" ></mt-button></mt-button>
        <mt-button>登录</mt-button>
    </mt-header>

    <form>
    <div class='padtop40'>
        <mt-field class='mgtop10 after' placeholder="账号" type="lel" :attr="{maxlength:11}"></mt-field>
        <mt-field class='after' placeholder="密码" :type="mytype" :attr="{maxlength:16}">
            <mt-switch v-model="value"></mt-switch>
        </mt-field>
        <mt-field class='after'  placeholder="验证码">
           <!--  <img src="" height="45px" width="100px"> -->
            <p class="p">2457</p>
        </mt-field>
    </div>
    </form>

    <div class="padlr10 fs0-8 colred">
        <p>温馨提示:未注册过的账号，登录时自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
    </div>

    <div class="padlr10">
      <mt-button size="large" type="primary">登录</mt-button>
    </div>

    <div class="padlr10 mgtop10">
      <span class='col right'>重置密码</span>
    </div>
  </div>
</template>


<script>

export default {
  data () {
    return {
      value:true
    }
  },
  component:{
  //注册组件
   mytype: function(){
     return this.value?'passrord':''
   }
  },
  mounted:function(){
  //生命周期
      
  },
  computed:{
  //计算属性
    mytype:function(){
     return this.value?'password':''
      
    }

  },
  methods:{
  //函数
    my(){
        this.$router.push('/my');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-cell-wrapper{
 
  background-image:none;
}

</style>