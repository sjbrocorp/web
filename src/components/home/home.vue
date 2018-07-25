<template>
  <section class="home">
    Welcome back, <span class="home__username">{{ currentUser }}</span>
  </section>
</template>

<script>
import { userStore } from '@/stores'
export default {
  data () {
    return {
      state: userStore.state
    }
  },
  computed: {
    currentUser () {
      return this.state.current.name
    }
  }
}
</script>

<style lang="scss">
  .home {
    &__username {
      font-weight: bold;
    }
  }
</style>
