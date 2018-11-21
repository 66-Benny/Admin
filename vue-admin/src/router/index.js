import Vue from 'vue'
import Router from 'vue-router'
import * as types from '../store/mutation-types'
import store from '../store'
import Login from '@/view/Login'
import RoleAll from '@/view/RolePage/RoleAll'
import RoleAdmin from '@/view/RolePage/RoleAdmin'
import RoleEditor from '@/view/RolePage/RoleEditor'
import errorPage from '@/view/RolePage/errorPage'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/RoleAll',
    name: 'RoleAll',
    component: RoleAll,
    meta: {
      requireAuth: true,
      roles: ['admin', 'editor']
    }
  },
  {
    path: '/RoleAdmin',
    name: 'RoleAdmin',
    component: RoleAdmin,
    meta: {
      requireAuth: true,
      roles: ['admin']
    }
  },
  {
    path: '/RoleEditor',
    name: 'RoleEditor',
    component: RoleEditor,
    meta: {
      requireAuth: true,
      roles: ['editor']
    }
  },
  {
    path: '/404',
    name: 'errorPage',
    component: errorPage
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('X-token')) {
  store.commit(types.SET_TOKEN, window.localStorage.getItem('X-token'))
}
if (window.localStorage.getItem('UserRolr')) {
  store.commit(types.SET_ROLE, window.localStorage.getItem('UserRolr'))
}

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.userToken) {
      if (to.meta.roles.includes(store.getters.userrole)) { next() } else {
        next({
          path: '/404'
        })
      }
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
