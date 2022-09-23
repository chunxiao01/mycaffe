import Vue from "vue"
import Vuex from "vuex"

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex)

const state = {
  cartDatas: []
}

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {}
})

export default store
