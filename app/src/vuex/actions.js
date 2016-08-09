import * as types from './mutation-types'
import ffmetadata from 'ffmetadata'

export const setDirectory = ({ dispatch }, directory) => {
  dispatch(types.SET_DIRECTORY, directory)
}

export const setFilePaths = ({ dispatch }, paths) => {
  dispatch(types.SET_FILEPATHS, paths)

  let metadataPromises = []
  for (let i = 0; i < paths.length; i++) {
    metadataPromises.push(getMetadata(paths[i]))
  }

  Promise.all(metadataPromises)
    .then(metadata => {
      dispatch(types.SET_METADATA, metadata)
    })
}

export const setSelection = ({ dispatch }, selection) => {
  dispatch(types.SET_SELECTION, selection)
}

function getMetadata (path) {
  return new Promise((resolve, reject) => {
    ffmetadata.read(path, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
