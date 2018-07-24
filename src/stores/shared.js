import { assign } from 'lodash'
import { http } from '@/services'
import { ticketStore } from '.'

export const sharedStore = {
  state: {
    tickets: []
  },
  init () {
    return new Promise((resolve, reject) => {
      http.get('data', ({ data }) => {
        assign(this.state, data)
        ticketStore.init(this.state.tickets)
        resolve(data)
      }, error => reject(error))
    })
  }
}
