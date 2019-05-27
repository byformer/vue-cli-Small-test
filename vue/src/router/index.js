/* 引入pages文件夹中的四个副页面 */
import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/main.vue'
import Tool from '../pages/tool.vue'
import find from '../pages/find.vue'
import My from '../pages/my.vue'
import logins from '../pages/logins.vue'
import city from '../pages/city.vue'
import denglu from '../pages/denglu.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/', component: Main
    },
    {
      path: '/main', component: Main
    }, {
      path: '/tool', component: Tool
    }, {
      path: '/find', component: find
    }, {
      path: '/my', component: My
    },
    {
      path: '/logins', component: logins
    },
    {
      path: '/city', component: city
    },
    {
      path: '/denglu', component: denglu
    }
  ]
})
