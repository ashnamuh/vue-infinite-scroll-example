import axios from 'axios'

export default {
  namespaced: true,
  state: {
    ads: [],
  },
  mutations: {
    INSERT_AD (state, ads) {
      console.log('INSERT_AD')
      state.ads = state.ads.concat(ads)
    }
  },
  actions: {
    async fetch (context, query) {
      console.log(query)
      const page = query.page || 1
      const limit = query.limit || 1
      const { data } = await axios.get(`http://comento.cafe24.com/ads.php?page=${page}&limit=${limit}`)
      context.commit('INSERT_AD', data.list)
    }
  },
  getters: {
    getAds: state => () => state.ads,
  }
}