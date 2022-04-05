const initialState = {
  page: 1,
  posts: []
}

function PostsReducer(state: {page: number, posts: any[]} = initialState, action: any) {
  switch (action.type) {
    case 'SAVE_POSTS':
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default PostsReducer