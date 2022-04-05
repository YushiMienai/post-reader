import store from '../store'

export function startLoader() {
  store.dispatch({
    type: 'LOADER_START'
  })
}

export function stoptLoader() {
  store.dispatch({
    type: 'LOADER_STOP'
  })
}