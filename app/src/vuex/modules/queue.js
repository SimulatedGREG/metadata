import {
  SET_DIRECTORY,
  SET_FILEPATHS,
  SET_METADATA,
  SET_SELECTION
} from '../mutation-types'

const state = {
  directory: '',
  filePaths: [],
  metadata: [],
  selection: []
}

const mutations = {
  [SET_DIRECTORY] (state, directory) {
    state.directory = directory
  },
  [SET_FILEPATHS] (state, paths) {
    state.filePaths = paths
  },
  [SET_METADATA] (state, metadata) {
    state.metadata = metadata
  },
  [SET_SELECTION] (state, selection) {
    state.selection = selection
  }
}

export default {
  state,
  mutations
}
