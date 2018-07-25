<template>
  <section class="tickets-menu">
    <div class="tickets-menu__item">
      <button>
        <font-awesome-icon :icon="['far', 'copy']"/>
        Open
      </button>
    </div>
    <div class="tickets-menu__item">
      <button>
        <font-awesome-icon icon="check"/>
        Answered
      </button>
    </div>
    <div class="tickets-menu__item">
      <button>
        <font-awesome-icon icon="user"/>
        My Tickets
      </button>
    </div>
    <div class="tickets-menu__item">
      <button>
        <font-awesome-icon icon="copy"/>
        Closed Tickets
      </button>
    </div>
    <div class="tickets-menu__item">
      <button @click="createTicket">
        <font-awesome-icon :icon="['far', 'file']"/>
        New Ticket
      </button>
    </div>
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

<style lang="scss">
  .tickets-menu {
    display: flex;
    &__item {
      & > * {
        &:hover {
          color: #FF7C01;
        }
        outline: none;
        cursor: pointer;
        border-radius: unset;
        background-color: #e9e9e9;
        padding: .5rem;
        color: #7d7d7d;
        font-weight: bold;
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
      }
    }
  }
</style>
