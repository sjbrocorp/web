import { http } from '@/services'
import stub from '@/stubs/ticket'

export const ticketStore = {
  stub,
  state: {
    tickets: [stub]
  },
  get all () {
    return this.state.tickets
  },
  set all (value) {
    this.state.tickets = value
  },
  init (tickets) {
    this.all = tickets
  },
  store (data) {
    return new Promise((resolve, reject) => {
      http.post('tickets', data, ({ data }) => {
        this.all.push(data)
        resolve(data)
      }, error => reject(error))
    })
  }
}
