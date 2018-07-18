import axios from 'axios'
import { cookie, event } from '@/services'

export const http = {
  request: (method, url, data, successCb = null, errorCb = null) => {
    return axios.request({ url, data, method: method.toLowerCase() })
      .then(successCb)
      .catch(errorCb)
  },
  get (url, successCb = null, errorCb = null) {
    return this.request('get', url, {}, successCb, errorCb)
  },
  post (url, data, successCb = null, errorCb = null) {
    return this.request('post', url, data, successCb, errorCb)
  },
  delete (url, data = {}, successCb = null, errorCb = null) {
    return this.request('delete', url, data, successCb, errorCb)
  },

  setBaseUrl (url) {
    axios.defaults.baseURL = url
  },

  setRequestHeader (header, valueCb) {
    axios.interceptors.request.use(config => {
      config.headers[header] = valueCb()
      return config
    })
  },

  storeResponseData (header, key) {
    axios.interceptors.response.use(response => {
      const value = response.headers[header] || response.data[header]
      value && cookie.set(key, value)
      return response
    }, error => {
      if (error.response.status === 401) {
        event.emit(event.$names.LOGOUT)
      } else {
        return Promise.reject(error)
      }
    })
  }
}
