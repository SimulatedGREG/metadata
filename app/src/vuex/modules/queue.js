import {
  SET_DIRECTORY,
  SET_FILEPATHS,
  TOGGLE_PATH_SELECTION
} from '../mutation-types'

const state = {
  directory: '',
  filePaths: []
}

const mutations = {
  [SET_DIRECTORY] (state, directory) {
    state.directory = directory
  },
  [SET_FILEPATHS] (state, paths) {
    state.filePaths = paths
  },
  [TOGGLE_PATH_SELECTION] (state, path) {
    state.filePaths.find((p, i) => {
      if (p.path === path) {
        let toggle = !state.filePaths[i].selected
        state.filePaths[i].selected = toggle
      }
    })
  }
}

export default {
  state,
  mutations
}
