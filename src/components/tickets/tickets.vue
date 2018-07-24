<template>
  <section class="tickets">
    <button @click="createTicket">New Ticket</button>
    Tickets
    <ticket-list :tickets="state.tickets"/>
    <create-ticket ref="createTicket"/>
  </section>
</template>

<script>
import { ticketStore } from '@/stores'
import CreateTicket from '@/components/modals/create-ticket.vue'
import TicketList from '@/components/tickets/ticket-list.vue'
export default {
  components: { CreateTicket, TicketList },
  data () {
    return {
      state: ticketStore.state
    }
  },
  methods: {
    createTicket () {
      this.$refs.createTicket.open()
    }
  }
}
</script>
