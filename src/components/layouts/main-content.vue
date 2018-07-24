<template>
  <section class="main-content">
    <menu-bar/>
    <home v-if="current === 'home'"/>
    <tickets v-if="current === 'tickets'"/>
  </section>
</template>

<script>
import { config, event } from '@/services'
import Home from '@/components/home/home.vue'
import Tickets from '@/components/tickets/tickets.vue'
import MenuBar from '@/components/shared/menu-bar.vue'
export default {
  components: { Home, Tickets, MenuBar },
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
