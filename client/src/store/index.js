import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    //登陆成功之后，改变vuex的用户信息
    login(state,userInfo){
      state.userInfo = userInfo
    },
    //登出
    logout(state){
      state.userInfo = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
