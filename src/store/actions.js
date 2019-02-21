import _ from 'lodash'
import axios from 'axios'

const accumulateContents = async (contents, interval, adPage, rest) => {
  const adsRequestUrl = `http://comento.cafe24.com/ads.php?page=${adPage}&limit=1`

  if (contents.length <= interval) {
    return contents
  }
  if (rest) {
    const nextAsLength = interval - rest
    const adData = await axios.get(adsRequestUrl)
    return contents.splice(0, nextAsLength).concat(adData.data.list).concat(await accumulateContents(contents, interval, adPage + 1))
  }
  const adData = await axios.get(adsRequestUrl)

  return contents.splice(0, interval).concat(adData.data.list).concat(await accumulateContents(contents, interval, adPage + 1))
}

export default {
  async fetchPosts (context, query) {
    const page = query.page || 1
    const order = query.order || 'desc'
    const category = query.category
    const interval = 4
    const postRequestUrl = `http://comento.cafe24.com/request.php?page=${page}&ord=${order}&category=${category}`

    if (context.state.accumulatedLength) {
      const response = await axios.get(postRequestUrl)
      const data = _.cloneDeep(response.data)

      const rest = context.state.accumulatedLength % interval
      const adPage = context.state.adsLength + 1
      const contents = await accumulateContents(data.list, interval, adPage, rest)

      context.commit('UPDATE_CONTENTS', contents)
      context.commit('UPDATE_LENGTH', response.data.list.length)

      const adsLength = (context.state.contents.length - context.state.accumulatedLength) - context.state.adsLength
      context.commit('UPDATE_ADSLENGTH', adsLength)
    }

    if (!context.state.accumulatedLength) { // initial insertion
      const response = await axios.get(postRequestUrl)
      const data = _.cloneDeep(response.data)
      const adPage = context.state.adsLength + 1

      const contents = await accumulateContents(data.list, interval, adPage, 0)

      context.commit('UPDATE_CONTENTS', contents)
      context.commit('UPDATE_LENGTH', response.data.list.length)

      const adsLength = context.state.contents.length - context.state.accumulatedLength
      context.commit('UPDATE_ADSLENGTH', adsLength)
    }
  }
}
