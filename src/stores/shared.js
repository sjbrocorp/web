import { assign } from 'lodash'
import { http } from '@/services'
import { ticketStore, userStore } from '.'

export const sharedStore = {
  state: {
    tickets: [],
    currentUser: null
  },
  init () {
    return new Promise((resolve, reject) => {
      http.get('data', ({ data }) => {
        assign(this.state, data)
        ticketStore.init(this.state.tickets)
        userStore.init(this.state.currentUser)
        resolve(data)
      }, error => reject(error))
    })
  }
}
