<template>
  <section class="ticket-list">
    <div class="ticket-list__info">
      Showing {{ totalTickets }} Open Tickets
    </div>
    <div class="ticket-list__content">
      <table class="ticket-list__table ticket-list__table--header">
        <thead>
          <tr class="ticket-list__row">
            <th
              class="ticket-list__col ticket-list__col--name"
            >Name</th>
            <th
              class="ticket-list__col ticket-list__col--email"
            >Email</th>
            <th
              class="ticket-list__col ticket-list__col--contact"
            >Contact</th>
            <th
              class="ticket-list__col ticket-list__col--telephone"
            >Telephone</th>
            <th
              class="ticket-list__col ticket-list__col--extension"
            >Ext.</th>
            <th
              class="ticket-list__col ticket-list__col--description"
            >Description</th>
            <th
              class="ticket-list__col ticket-list__col--status"
            >Status</th>
          </tr>
        </thead>
      </table>
      <virtual-scroller
        :items="ticketRows"
        :renderers="renderers"
        :item-height="itemHeight"
        content-tag="table"
        key-field="ticket.id"
        class="ticket-list__table ticket-list__table--scroller"
      />
    </div>
  </section>
</template>

<script>
/* eslint-disable-next-line */
import sassVariables from '!!mk-sass-variables-loader!../../../assets/scss/abstracts/_variables.scss'
import TicketItem from '@/components/tickets/ticket-item.vue'
import RefreshesRem from '@/mixins/refreshes-rem'
export default {
  mixins: [RefreshesRem],
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
  computed: {
    totalTickets () {
      return this.tickets.length
    },
    itemHeight () {
      return Math.ceil(sassVariables['scroller-item-height'] * this.oneRem)
    }
  },
  watch: {
    tickets () {
      this.generateRows()
    }
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
  @import "~#/abstracts/variables";
  .ticket-list {
    &__info {
      color: $color-primary-1;
      font-weight: bold;
      padding: 0 .4rem;
      height: $header-height-tiny;
      line-height: $header-height-tiny;
    }

    &__content {
      height: calc(100% - #{$header-height-tiny});
      position: relative;
    }

    &__table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;

      &--header {
        background-color: $color-grey-dark-2;
        color: $color-white;
        height: $header-height-tiny;
        line-height: $header-height-tiny;
      }

      &--scroller {
        position: absolute;
        top: $header-height-tiny;
        left: 0;
        right: 0;
        bottom: 0;

        .item-container {
          position: absolute;

          table {
            table-layout: fixed;
            border-collapse: collapse;
          }

          .item {
            line-height: $scroller-item-height + rem;
            height: $scroller-item-height + rem;
          }
        }
      }
    }

    &__row {
      &:nth-child(2n) {
        background-color: rgba(#d9eeff, .5);
      }
      &--body {
        cursor: pointer;
        &:hover {
          background-color: rgba(#f6ff90, .3);
        }
      }
    }
    &__col {
      &:first-child {
        border-left: 1px solid rgba(gray, .3);
      }

      padding: 0 .5rem;
      border-right: 1px solid rgba(gray, .3);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &--name {}
      &--email {}
      &--contact {}
      &--telephone {}
      &--extension {
        width: 4%;
      }
      &--description {
        width: 25%;
      }
      &--status {
        width: 10%;
      }
      &--pending {
        background-color: $color-pending;
      }
      &--investigating {
        background-color: $color-investigating;
      }
      &--awaiting-reply {
        background-color: $color-awaiting;
      }
      &--solved {
        background-color: $color-solved;
      }
      &--completed {
        background-color: $color-completed;
      }
    }
  }
</style>
