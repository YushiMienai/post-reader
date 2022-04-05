import {combineReducers} from 'redux'
import RegisterReducer from './reducers/register'
import PostsReducer from './reducers/posts'
import LoaderReducer from './reducers/loader'

export default combineReducers({
  register: RegisterReducer,
  posts: PostsReducer,
  loader: LoaderReducer
})