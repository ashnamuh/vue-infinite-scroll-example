
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
  },
  RESET_LENGTH (state) {
    console.log('RESET_LENGTH')
    state.accumulatedLength = 0
  },
  RESET_ADSLENGTH (state) {
    console.log('RESET_ADSLENGTH')
    state.adsLength = 0
  },
  RESET_CONTENTS (state) {
    console.log('RESET_CONTENTS')
    state.contents = []
  }
}
