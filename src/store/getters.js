
export default {
  getContents: state => () => state.contents,
  getAccumulatedLength: state => () => state.accumulatedLength,
  getAdsLength: state => () => state.adsLength
}
