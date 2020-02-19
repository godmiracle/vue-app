/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'
import decodeJwt from 'jwt-decode'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录用户，一个对象，包含 token 信息
    user: getItem('user')
  },
  mutations: {
    setUser(state, data) {
      // 解析 JWT 中的数据（需要使用用户ID）
      if (data && data.token) {
        data.id = decodeJwt(data.token).user_id
      }
      state.user = data
      // 为了防止刷新丢失 state 中的 user 状态，我们把它放到本地存储
      setItem('user', state.user)
    }
  },
  actions: {},
  modules: {}
})
