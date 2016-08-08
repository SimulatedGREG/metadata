import * as types from './mutation-types'

export const setDirectory = ({ dispatch }, directory) => {
  dispatch(types.SET_DIRECTORY, directory)
}

export const setFilePaths = ({ dispatch }, paths) => {
  dispatch(types.SET_FILEPATHS, paths)
}

export const togglePathSelection = ({ dispatch }, path) => {
  console.log(path, 'actions')
  dispatch(types.TOGGLE_PATH_SELECTION, path)
}
