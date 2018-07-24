<template>
  <section class="ticket-list">
    <table class="ticket-list__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Telephone</th>
          <th>Extension</th>
          <th>Description</th>
        </tr>
      </thead>
    </table>
    <virtual-scroller
      :items="ticketRows"
      :renderers="renderers"
      item-height="35"
      content-tag="table"
      key-field="ticket.id"
    />
  </section>
</template>

<script>
import TicketItem from '@/components/tickets/ticket-item.vue'
export default {
  props: {
    tickets: { type: Array, required: true }
  },
  data () {
    return {
      renderers: Object.freeze({
        ticket: TicketItem
      }),
      ticketRows: []
    }
  },
  watch: {
    tickets () {
      this.generateRows()
    }
  },
  mounted () {
    this.generateRows()
  },
  methods: {
    generateRows () {
      this.ticketRows = this.tickets.map(ticket => {
        return {
          ticket,
          type: 'ticket'
        }
      })
    }
  }
}
</script>
