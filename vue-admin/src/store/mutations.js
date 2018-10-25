// 提交状态修改。可以理解为set、get中的set。每一个mutation都有一个字符串的事件类型和回调函数。第一个参数默认为state。vuex中唯一修改state的方式，不支持异步操作。和vue中的methods类似
import * as types from './mutation-types'

const mutations = {
  [types.SET_USERINFO] (state, loginForm) {
    state.userinfo = loginForm
  },
  [types.SET_TOKEN] (state, token) {
    state.userToken = token
  }
}

export default mutations
