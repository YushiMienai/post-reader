import store from '../store'
// @ts-ignore
import api from '@api'

export async function getPosts(page: number) {
  const response = await api.get('https://api.supermetrics.com/assignment/posts', {page})
  const results = await response.json()
  if (response.ok) {
    store.dispatch({
      type: 'SAVE_POSTS',
      payload: results.data
    })
  }
}