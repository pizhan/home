import Vue from 'vue'
import Vuex from 'vuex'
import {httpGet} from '../js/httpRequestor'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    default: 1
  },
  mutations: {
  },
  actions: {
    async getRequest(context, data) {
      try {
        return await httpGet(data.url, data.data)
      }
      catch (err) {
        // console.log(err)
      }
    }
  },
  modules: {
  }
})
