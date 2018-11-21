// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Axios from 'axios'
import apiConfig from '../config/api.config'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/iconfont.css'
import 'normalize.css'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Axios.defaults.baseURL = apiConfig.baseUrl
Vue.use(ElementUI, Axios)
// Vue.use(axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
