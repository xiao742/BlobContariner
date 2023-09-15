/*
 * @Author: Mr.xiao
 * @Date: 2022-12-12 17:45:36
 * @LastEditTime: 2023-09-14 16:36:37
 * @LastEditors: 雨落潇潇
 * @Description: 数据仓库
 * @text: 惑而不从师,其为惑也,终不解矣.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    hotA: []
  },
  mutations: {
    //登陆成功之后，改变vuex的用户信息
    login(state, userInfo) {
      state.userInfo = userInfo
    },
    //登出
    logout(state) {
      state.userInfo = {}
    },
    getHotA(state, hotA) {
      console.log(hotA, "hotA")
      state.hotA = hotA
    }
  },
  actions: {
  },
  modules: {
  }
})
