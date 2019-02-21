
export default {
  UPDATE_LENGTH (state, newLength) {
    console.log('UPDATE_LENGTH')
    state.accumulatedLength += newLength
  },
  UPDATE_ADSLENGTH (state, newLength) {
    console.log('UPDATE_ADSLENGTH')
    state.adsLength += newLength
  },
  UPDATE_CONTENTS (state, contents) {
    console.log('UPDATE_CONTENTS')
    state.contents = state.contents.concat(contents)
  }
}
