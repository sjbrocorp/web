<template>
  <section class="tickets">
    <div class="tickets__header">
      <tickets-menu class="tickets__menu"/>
      <search-bar class="tickets__search"/>
    </div>
    <ticket-list
      :tickets="state.tickets"
      class="tickets__list"
    />
  </section>
</template>

<script>
import { ticketStore } from '@/stores'
import TicketList from '@/components/tickets/ticket-list.vue'
import TicketsMenu from '@/components/tickets/tickets-menu.vue'
import SearchBar from '@/components/shared/search-bar.vue'
export default {
  components: { TicketList, TicketsMenu, SearchBar },
  data () {
    return {
      state: ticketStore.state
    }
  }
}
</script>

<style lang="scss" scoped>
  .tickets {
    &__header {
      border-bottom: 1px solid #a4a3a4;
      padding: 1rem 2rem;
      height: 4.5rem;
    }

    &__menu {
      display: inline-block;
      width: 50%
    }

    &__search {
      width: 49%;
      display: inline-block;
    }

    &__list {
      height: calc(100% - 4.5rem);
    }
  }
</style>
