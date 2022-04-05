import {createStore} from 'redux'
import rootReducer from './reducers'

export default createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSIONS && (window as any).__REDUX_DEVTOOLS_EXTENSIONS())