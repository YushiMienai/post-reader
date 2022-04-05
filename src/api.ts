import Cookies from 'universal-cookie/es6'
import queryString from 'querystring'
// @ts-ignore
import {startLoader, stoptLoader} from '@actions/loader'

class Api {
  headers: HeadersInit = { 'Content-Type': 'application/json' }

  post(path: string, body: object = {}) {
    return this.handleResponse(
      fetch(path, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body)
      })
    )
  }

  get(path: string, params: object = {}) {
    const cookies = new Cookies()
    path = `${path}?${queryString.stringify({...params, sl_token: cookies.get('sl_token')})}`
    return this.handleResponse(
      fetch(path, {
        method: 'GET',
        headers: this.headers
      })
    )
  }

  async handleResponse(request: object) {
    startLoader()
    const response = await (request)
    stoptLoader()

    return response
  }
}

export default new Api()