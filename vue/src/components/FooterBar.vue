<template>
  <div id="tab-bar">
    <mt-tabbar v-model="selected" v-show="isShow" fixed class="border-1px-top">
      <mt-tab-item id="main">
        <img :src="img1" slot="icon">首页
      </mt-tab-item>
      <mt-tab-item id="tool">
        <img :src="img2" slot="icon">订单
      </mt-tab-item>
     <mt-tab-item id="find">
        <img :src="img3" slot="icon">发现
      </mt-tab-item>
      
      <mt-tab-item id="my">
        <img :src="img4" slot="icon">我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data(){
      return {
        selected: 'main',
        img1: "static/shouye.png",
        img2: "static/dingdan.png",
        img3: "static/faxian.png",
        img4: "static/wode.png"
      }
    },
    computed: {
      isShow: function () {
        return true;
      }
    },
    watch: {
      'selected': {
        handler(){
          if (this.selected == "main") {
            this.$router.push('/main');
            this.img1 = "static/shouye_2.png"
          } else {
            this.img1 = "static/shouye.png"
          }
          if (this.selected == "tool") {
            this.$router.push('/tool');
            this.img2 = 'static/dingdan_2.png'
          } else {
            this.img2 = 'static/dingdan.png'
          }
            if (this.selected == "find") {
            this.$router.push('/find');
            this.img3 = 'static/faxian_2.png'
          } else {
            this.img3 = 'static/faxian.png'
          }
          if (this.selected == "order") {
            this.$router.push('/order')
            this.img4 = "static/wode_2.png";
          } else {
            this.img4 = "static/wode.png";
          }
          if (this.selected == "my") {
            this.$router.push('/my')
            this.img4 = "static/wode_2.png";
          } else {
            this.img4 = "static/wode.png";
          }
        }
      }
    }
  }
</script>
