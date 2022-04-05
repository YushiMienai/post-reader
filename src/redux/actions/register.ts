import Cookies from 'universal-cookie/es6'
import store from '../store'
// @ts-ignore
import api from '@api'

export async function register(regInfo: any) {
  const response = await api.post('https://api.supermetrics.com/assignment/register', {...regInfo, client_id: 'ju16a6m81mhid5ue1z3v2g0uh'})
  const info = await response.json()
  if (response.ok) {
    const cookies = new Cookies()
    cookies.set('sl_token', info.data.sl_token, {path: '/', maxAge: 3600})
    localStorage.setItem('sl_token', info.data.sl_token)
    store.dispatch({
      type: 'REGISTER',
      payload: {sl_token: info.data.sl_token}
    })
  }
  return response
}

export function getToken() {
  const cookies = new Cookies()
  const token = cookies.get('sl_token')
  if (!!token) {
    store.dispatch({
      type: 'GET_TOKEN',
      payload: {sl_token: token}
    })
  }
}