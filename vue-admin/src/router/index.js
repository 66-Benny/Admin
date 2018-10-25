import Vue from 'vue'
import Router from 'vue-router'
import * as types from '../store/mutation-types'
import store from '../store'
import Login from '@/view/Login'
import dashboard from '@/view/dashboard/index'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('X-token')) {
  store.commit(types.SET_TOKEN, window.localStorage.getItem('X-token'))
}

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.userToken) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
