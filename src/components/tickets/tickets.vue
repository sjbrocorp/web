<template>
  <section class="tickets">
    <div class="tickets__header">
      <div class="tickets__info">
        Showing {{ totalTickets }} Open Tickets
      </div>
      <tickets-menu class="tickets__menu"/>
    </div>
    <ticket-list :tickets="state.tickets"/>
  </section>
</template>

<script>
import { ticketStore } from '@/stores'
import TicketList from '@/components/tickets/ticket-list.vue'
import TicketsMenu from '@/components/tickets/tickets-menu.vue'
export default {
  components: { TicketList, TicketsMenu },
  data () {
    return {
      state: ticketStore.state
    }
  },
  computed: {
    totalTickets () {
      return this.state.tickets.length
    }
  }
}
</script>

<style lang="scss">
  .tickets {
    display: flex;
    flex-direction: column;
    &__header {
      display: flex;
      border-bottom: 1px solid #a4a3a4;
      line-height: 3rem;
      height: 3rem;
    }

    &__info {
      flex: 1;
      color: #005B92;
      font-weight: bold;
    }

    &__menu {
      margin-right: 4rem;
      flex: 2;
      justify-content: flex-end;
    }
  }
</style>
