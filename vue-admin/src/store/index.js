// 入口文件
import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import tranalateEN from '../translate/en'
import tranalateCN from '../translate/cn'

Vue.use(Vuex)
Vue.use(vuexI18n.plugin, new Vuex.Store())

Vue.i18n.add('en', tranalateEN.en)
Vue.i18n.add('cn', tranalateCN.cn)

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
