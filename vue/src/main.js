// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 引入mint-ui插件与css */
// eslint-disable-next-line import/no-duplicates
import Mint from 'mint-ui'

// eslint-disable-next-line import/no-duplicates
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './style/mycss.css'
// eslint-disable-next-line import/no-duplicates
import {Switch} from 'mint-ui'
/* import Resource from 'vue-resource' */
import VueResource from 'vue-resource'
Vue.config.productionTip = false

// 引入全部组件
// eslint-disable-next-line no-undef
Vue.component(Switch.name, Switch)
Vue.use(VueResource)
Vue.use(Mint)
Vue.component(Button.name, Button)

// eslint-disable-next-line no-undef
/* vue.use(Resource) */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
