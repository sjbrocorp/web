<template>
  <div
    v-if="newTicket"
    class="create-ticket">
    <form @submit.prevent="submitForm">
      <input
        v-model="newTicket.email"
        type="email"
        name="email">
      <input
        v-model="newTicket.name"
        type="text"
        name="name">
      <input
        v-model="newTicket.contact"
        type="text"
        name="contact">
      <input
        v-model="newTicket.telephone"
        type="text"
        name="telephone">
      <input
        v-model="newTicket.extension"
        type="text"
        name="extension">
      <input
        v-model="newTicket.description"
        type="text"
        name="description">
      <button type="submit">Submit Ticket</button>
    </form>
  </div>
</template>

<script>
import { clone } from 'lodash'
import { alerts } from '@/services'
import { ticketStore } from '@/stores'
export default {
  data () {
    return {
      newTicket: null
    }
  },
  methods: {
    open () {
      this.newTicket = clone(ticketStore.stub)
    },
    async submitForm () {
      try {
        await ticketStore.store(this.newTicket)
        alerts.success('Ticket created')
        this.newTicket = null
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
