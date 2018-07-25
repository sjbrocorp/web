<template>
  <section class="main-content">
    <home v-if="current === 'home'"/>
    <tickets v-if="current === 'tickets'"/>
  </section>
</template>

<script>
import { config, event } from '@/services'
import Home from '@/components/home/home.vue'
import Tickets from '@/components/tickets/tickets.vue'
export default {
  components: { Home, Tickets },
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
    flex: 8;
  }
</style>
