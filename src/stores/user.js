import { cookie, http } from '@/services'
import stub from '@/stubs/user'

export const userStore = {
  state: {
    current: stub
  },

  init (user) {
    this.current = user
  },

  get current () {
    return this.state.current
  },

  set current (user) {
    this.state.current = user
    return this.state.current
  },

  login (data) {
    return new Promise((resolve, reject) => {
      http.post('me', data, ({ data }) => {
        resolve(data)
      }, error => reject(error))
    })
  },

  logout () {
    return new Promise((resolve, reject) => {
      http.delete('me', {}, (data) => {
        cookie.delete('jwt-token')
        resolve(data)
      }, error => reject(error))
    })
  }
}
