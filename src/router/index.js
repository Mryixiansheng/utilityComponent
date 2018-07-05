import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      show: false
    },
    {
      path: '/keyboardShow',
      name: 'keyboardShow',
      chineseName: '自定义键盘',
      integrity: 10, // 完整度
      show: true,
      component: resolve => require(['@/pages/keyboardShow'], resolve)
    }

  ]
})
