import Vue from 'vue'
import Vuex from 'vuex'

// Load default Vuex modules
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

// Load my custom modules
import notice from './modules/notice'
import category from './modules/category'
import ads from './modules/advertisement'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  getters,
  actions,
  modules: {
    notice,
    category,
    ads
  }
})
