import { cookie, http } from '@/services'

export const userStore = {
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
