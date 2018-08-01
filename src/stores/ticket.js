import { each } from 'lodash'
import { http } from '@/services'
import stub from '@/stubs/ticket'
import Vue from 'vue'

export const ticketStore = {
  stub,
  state: {
    tickets: [stub]
  },
  cache: {},
  get all () {
    return this.state.tickets
  },
  set all (value) {
    this.state.tickets = value
  },
  init (tickets) {
    this.all = tickets
    each(this.all, ticket => {
      this.setupTicket(ticket)
    })
  },
  setupTicket (ticket) {
    this.cache[ticket.id] = ticket
  },
  store (data) {
    return new Promise((resolve, reject) => {
      http.post('tickets', data, ({ data }) => {
        this.all.unshift(data)
        this.setupTicket(data)
        resolve(data)
      }, error => reject(error))
    })
  },

  storeMessage (ticket, data) {
    return new Promise((resolve, reject) => {
      http.post(`tickets/${ticket.id}/messages`, data, ({ data }) => {
        ticket.messages.unshift(data)
        resolve(data)
      }, error => reject(error))
    })
  },

  update (ticket, updatedTicket) {
    // Don't try to send the messages array with the request
    delete updatedTicket.messages
    return new Promise((resolve, reject) => {
      http.put(`tickets/${ticket.id}`, updatedTicket, ({ data }) => {
        const ticketIndex = this.all.findIndex(storedTicket => {
          return storedTicket.id === ticket.id
        })
        Vue.set(this.all, ticketIndex, updatedTicket)
        this.setupTicket(updatedTicket)
        resolve(data)
      }, error => reject(error))
    })
  },
  byId (id) {
    return this.cache[id]
  }
}
