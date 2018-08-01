<template>
  <section class="main-content">
    <home v-show="current === 'home'"/>
    <tickets v-show="current === 'tickets'"/>
    <create-ticket v-show="current === 'tickets/create'"/>
    <edit-ticket v-show="current === 'tickets/edit'"/>
  </section>
</template>

<script>
import { config, event } from '@/services'
import Home from '@/components/home/home.vue'
import Tickets from '@/components/tickets/tickets.vue'
import CreateTicket from '@/components/tickets/create-ticket.vue'
import EditTicket from '@/components/tickets/edit-ticket.vue'
export default {
  components: { Home, Tickets, CreateTicket, EditTicket },
  data () {
    return {
      current: config.defaultView
    }
  },
  created () {
    event.on(config.events.LOAD_MAIN_VIEW, (view) => {
      this.current = view
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "~#/abstracts/variables";
  .main-content {
    & > * {
      height: 100%;
    }
  }
</style>
