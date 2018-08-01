<template>
  <section class="tickets-menu">
    <button class="tickets-menu__item">
      <font-awesome-icon :icon="['far', 'copy']"/>
      Open
    </button>
    <button class="tickets-menu__item">
      <font-awesome-icon icon="check"/>
      Answered
    </button>
    <button class="tickets-menu__item">
      <font-awesome-icon icon="user"/>
      My Tickets
    </button>
    <button class="tickets-menu__item">
      <font-awesome-icon icon="copy"/>
      Closed Tickets
    </button>
    <button
      class="tickets-menu__item"
      @click="createTicket">
      <font-awesome-icon :icon="['far', 'file']"/>
      New Ticket
    </button>
  </section>
</template>

<script>
import { router } from '@/services'
export default {
  methods: {
    createTicket () {
      router.go('/tickets/create')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~#/abstracts/variables";
  .tickets-menu {
    &__item {
      outline: none;
      cursor: pointer;
      background-color: $color-grey-light-1;
      padding: .5rem;
      color: $color-grey-dark-1;
      font-weight: bold;
      border-right: 1px solid gray;
      border-bottom: 1px solid gray;
      &:hover {
        color: $color-secondary-1;
      }
    }
  }
</style>
