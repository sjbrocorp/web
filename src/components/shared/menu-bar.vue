<template>
  <div class="menu-bar">
    <a href="#!/home">Home</a>
    <a href="#!/tickets">Tickets</a>
    <a
      href="#"
      @click.prevent="logout">Logout</a>
  </div>
</template>

<script>
import { userStore } from '@/stores'
export default {
  methods: {
    async logout () {
      try {
        await userStore.logout()
        location.reload()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
