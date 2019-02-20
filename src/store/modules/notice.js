import axios from 'axios'

export default {
  namespaced: true,
  state: {
    notices: [],
    accumulatedLength: 0
  },
  mutations: {
    INSERT_NOTICES (state, notices) {
      console.log('INSERT_NOTICES')
      state.notices = state.notices.concat(notices)
    },
    UPDATE_LENGTH (state, newLength) {
      console.log('UPDATE_LENGTH')
      state.accumulatedLength += newLength
    }
  },
  actions: {
    async fetch (context, query) {
      console.log(query)
      const page = query.page || 1
      const order = query.order || 'desc'
      const category = query.category
      const { data } = await axios.get(`http://comento.cafe24.com/request.php?page=${page}&ord=${order}&category=${category}`)
      context.commit('INSERT_NOTICES', data.list)
      context.commit('UPDATE_LENGTH', data.list.length)
    }
  },
  getters: {
    getNotices: state => () => state.notices,
    getAccumulatedLength: state => () => state.accumulatedLength
  }
}
