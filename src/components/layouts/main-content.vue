<template>
  <section class="main-content">
    <home v-if="current === 'home'"/>
    <tickets v-if="current === 'tickets'"/>
    <create-ticket v-if="current === 'tickets/create'"/>
  </section>
</template>

<script>
import { config, event } from '@/services'
import Home from '@/components/home/home.vue'
import Tickets from '@/components/tickets/tickets.vue'
import CreateTicket from '@/components/tickets/create-ticket.vue'
export default {
  components: { Home, Tickets, CreateTicket },
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

<style lang="scss">
  @import "~#/variables";
  .main-content {
    flex: 15;
    display: flex;
  }
</style>
