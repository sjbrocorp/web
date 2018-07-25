<template>
  <section class="ticket-list">
    <table class="ticket-list__table ticket-list__table--header">
      <thead>
        <tr class="ticket-list__row">
          <th
            class="ticket-list__col ticket-list__col--header ticket-list__col--name"
          >Name</th>
          <th
            class="ticket-list__col ticket-list__col--header ticket-list__col--email"
          >Email</th>
          <th
            class="ticket-list__col ticket-list__col--header ticket-list__col--contact"
          >Contact</th>
          <th
            class="ticket-list__col ticket-list__col--header ticket-list__col--telephone"
          >Telephone</th>
          <th
            class="ticket-list__col ticket-list__col--header ticket-list__col--extension"
          >Extension</th>
          <th
            class="ticket-list__col ticket-list__col--header ticket-list__col--description"
          >Description</th>
        </tr>
      </thead>
    </table>
    <virtual-scroller
      :items="ticketRows"
      :renderers="renderers"
      item-height="35"
      content-tag="table"
      key-field="ticket.id"
      class="ticket-list__table ticket-list__table--scroller"
    />
  </section>
</template>

<script>
import TicketItem from '@/components/tickets/ticket-item.vue'
export default {
  props: {
    tickets: { type: Array, required: true }
  },
  data () {
    return {
      renderers: Object.freeze({
        ticket: TicketItem
      }),
      ticketRows: []
    }
  },
  watch: {
    tickets () {
      this.generateRows()
    }
  },
  mounted () {
    this.generateRows()
  },
  methods: {
    generateRows () {
      this.ticketRows = this.tickets.map(ticket => {
        return {
          ticket,
          type: 'ticket'
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import "~#/variables";
  .ticket-list {
    position: relative;

    &__table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;

      &--header {
        background-color: #a4a3a4;
        color: $color-white;
      }

      &--scroller {
        position: absolute;
        left: 0;
        right: 0;
      }
    }

    &__row {
      display: flex;
      height: 2rem;
      &:nth-child(2n) {
        background-color: rgba(#d9eeff, .5);
      }
      &:hover {
        background-color: rgba(#f6ff90, .3);
      }
    }
    &__col {
      display: block;
      &:first-child {
        border-left: 1px solid rgba(gray, .3);
      }

      padding: 0 .5rem;
      border-right: 1px solid rgba(gray, .3);
      border-bottom: 1px solid rgba(gray, .3);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &--name {
        width: 20%;
      }
      &--email {
        width: 20%;
        /*flex: 2;*/
      }
      &--contact {
        width: 10%;
        /*flex: 2;*/
      }
      &--telephone {
        width: 20%;
        /*flex: 2;*/
      }
      &--extension {
        width: 10%;
        /*flex: 1;*/
      }
      &--description {
        width: 20%;
        /*flex: 3;*/
      }
    }
  }
</style>
