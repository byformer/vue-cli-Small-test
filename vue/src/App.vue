<template>
  <div id="app">
   <div class="nav">
     
   </div>
    <div class="content-div">
     
        <router-view/>
     
    </div>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>
 
<script>
/* App.vue引入底部导航条FooterBar.vue */
  import Footer from './components/FooterBar.vue'
  export default {
    name: 'app',
    components: {
      'footer-bar': Footer
    },
    computed: {}
  }
</script>
<style scoped>
  
</style>