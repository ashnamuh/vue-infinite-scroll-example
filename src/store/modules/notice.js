import _ from 'lodash'
import axios from 'axios'

const accumulateData = async (a, interval, adPage, rest) => {
  if (a.length <= interval) {
    return a
  }
  if (rest) {
    console.log('rest is exist')
    const nextAsLength = interval - rest
    const adData = await axios.get(`http://comento.cafe24.com/ads.php?page=${adPage}&limit=1`)
    return a.splice(0, nextAsLength).concat(adData.data.list).concat(await accumulateData(a, interval, adPage + 1))
  }
  const adData = await axios.get(`http://comento.cafe24.com/ads.php?page=${adPage}&limit=1`)

  return a.splice(0, interval).concat(adData.data.list).concat(await accumulateData(a, interval, adPage + 1))
}

export default {
  namespaced: true,
  state: {
    notices: [],
    contents: [],
    accumulatedLength: 0,
    adsLength: 0
  },
  mutations: {
    INSERT_NOTICES (state, notices) {
      console.log('INSERT_NOTICES')
      state.notices = state.notices.concat(notices)
    },
    UPDATE_LENGTH (state, newLength) {
      console.log('UPDATE_LENGTH')
      state.accumulatedLength += newLength
    },
    UPDATE_ADSLENGTH (state, newLength) {
      console.log(newLength)
      console.log('UPDATE_ADSLENGTH')
      state.adsLength += newLength
    },
    UPDATE_CONTENTS (state, contents) {
      console.log('UPDATE_CONTENTS')
      state.contents = state.contents.concat(contents)
    }
  },
  actions: {
    async fetch (context, query) {
      console.log('fetchfetch')
      const page = query.page || 1
      const order = query.order || 'desc'
      const category = query.category
      const interval = 4

      if (context.state.accumulatedLength) {
        console.log('if exist')
        const rest = context.state.accumulatedLength % interval
        const res = await axios.get(`http://comento.cafe24.com/request.php?page=${page}&ord=${order}&category=${category}`)
        const data = _.cloneDeep(res.data)
        const adPage = context.state.adsLength + 1
        const contents = await accumulateData(data.list, interval, adPage, rest)
        context.commit('UPDATE_CONTENTS', contents)
        context.commit('UPDATE_LENGTH', res.data.list.length)
        const adsLength = (context.state.contents.length - context.state.accumulatedLength) - context.state.adsLength
        context.commit('UPDATE_ADSLENGTH', adsLength)
      }

      if (!context.state.accumulatedLength) { // initial insertion
        const res = await axios.get(`http://comento.cafe24.com/request.php?page=${page}&ord=${order}&category=${category}`)
        const data = _.cloneDeep(res.data)
        const adPage = context.state.adsLength + 1
        const contents = await accumulateData(data.list, interval, adPage, 0)
        context.commit('UPDATE_CONTENTS', contents)
        context.commit('UPDATE_LENGTH', res.data.list.length)
        const adsLength = context.state.contents.length - context.state.accumulatedLength
        context.commit('UPDATE_ADSLENGTH', adsLength)
      }
    }
  },
  getters: {
    getNotices: state => () => state.notices,
    getContents: state => () => state.contents,
    getAccumulatedLength: state => () => state.accumulatedLength,
    getAdsLength: state => () => state.adsLength
  }
}
