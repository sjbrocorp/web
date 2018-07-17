import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import { http, config, cookie } from '@/services'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  created: () => {
    http.setBaseUrl(config.apiPath)
    http.setRequestHeader('Authorization', () => `Bearer ${cookie.get('jwt-token')}`)
    // http.setRequestHeader()
    http.storeResponseData('access_token', 'jwt-token')
  },
  render: h => h(App)
})
