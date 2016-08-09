export function directory (state) {
  return state.queue.directory
}

export function filePaths (state) {
  return state.queue.filePaths
}

export function selectedPaths (state) {
  return state.queue.filePaths.filter(p => p.selected)
}
