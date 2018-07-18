import { http } from '@/services'

export const sharedStore = {
  init () {
    return new Promise((resolve, reject) => {
      http.get('data', ({ data }) => {
        resolve(data)
      }, error => reject(error))
    })
  }
}
