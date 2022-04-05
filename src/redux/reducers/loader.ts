function LoaderReducer (state: any = false, action: any) {
  switch (action.type) {
    case 'LOADER_START':
      return {...state, loader: true}
    case 'LOADER_STOP':
      return {...state, loader: false}
    default:
      return state
  }
}

export default LoaderReducer