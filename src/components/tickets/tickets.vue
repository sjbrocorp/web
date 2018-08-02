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
  @import "~#/abstracts/variables";
  @import "~#/abstracts/mixins";
  .tickets {
    &__header {
      border-bottom: 1px solid #a4a3a4;
      padding: 1rem 2rem;
      height: $header-height-small;

      @include respond(tab-land) {
        height: $header-height;
      }
    }

    &__menu {
      display: inline-block;
      width: 50%;

      @include respond(tab-land) {
        text-align: center;
        width: 100%;
        display: block;
        padding-bottom: .5rem;
      }
    }

    &__search {
      width: 40%;
      display: inline-block;

      @include respond(tab-land) {
        margin: 0 auto;
        text-align: center;
        display: block;
      }
    }

    &__list {
      height: calc(100% - #{$header-height-small});

      @include respond(tab-land) {
        height: calc(100% - #{$header-height});
      }
    }
  }
</style>
