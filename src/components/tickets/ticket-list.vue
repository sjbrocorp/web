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
            <th
              class="ticket-list__col ticket-list__col--header ticket-list__col--status"
            >Status</th>
          </tr>
        </thead>
      </table>
      <virtual-scroller
        :items="ticketRows"
        :renderers="renderers"
        item-height="25"
        content-tag="table"
        key-field="ticket.id"
        class="ticket-list__table ticket-list__table--scroller"
      />
    </div>
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
  computed: {
    totalTickets () {
      return this.tickets.length
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

<style lang="scss" scoped>
  @import "~#/abstracts/variables";
  .ticket-list {
    /*background-color: red;*/
    &__info {
      color: $color-primary-1;
      font-weight: bold;
      padding: 0 4px;
      height: 2.5rem;
      line-height: 2.5rem;
    }

    &__content {
      height: calc(100% - 2.5rem);
      position: relative;
    }

    &__table {
      /*background-color: green;*/
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;

      &--header {
        background-color: $color-grey-dark-2;
        color: $color-white;
      }

      &--scroller {
        position: absolute;
        top: 1.5rem;
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
            line-height: 25px;
            height: 25px;
          }
        }
      }
    }

    &__row {
      /*display: flex;*/
      /*height: 2rem;*/
      &:nth-child(2n) {
        /*background-color: rgba(#d9eeff, .5);*/
      }
      &--body {
        /*cursor: pointer;*/
        &:hover {
          /*background-color: rgba(#f6ff90, .3);*/
        }
      }
    }
    &__col {
      /*display: block;*/
      &:first-child {
        /*border-left: 1px solid rgba(gray, .3);*/
      }

      /*padding: 0 .5rem;*/
      /*border-right: 1px solid rgba(gray, .3);*/
      /*border-bottom: 1px solid rgba(gray, .3);*/
      /*overflow: hidden;*/
      /*white-space: nowrap;*/
      /*text-overflow: ellipsis;*/
      &--name {
        /*width: 20%;*/
      }
      &--email {
        /*width: 20%;*/
        /*flex: 2;*/
      }
      &--contact {
        /*width: 10%;*/
        /*flex: 2;*/
      }
      &--telephone {
        /*width: 15%;*/
        /*flex: 2;*/
      }
      &--extension {
        /*width: 5%;*/
        /*flex: 1;*/
      }
      &--description {
        /*width: 20%;*/
        /*flex: 3;*/
      }
      &--status {
        /*width: 10%;*/
        /*flex 3;*/
      }
      &--pending {
        /*background-color: #fee3e4;*/
      }
      &--investigating {
        /*background-color: #ffffee;*/
      }
      &--awaiting-reply {
        /*background-color: #d9d8ff;*/
      }
      &--solved {
        /*background-color: #d8ffd8;*/
      }
      &--completed {
        /*background-color: #f4f3f4;*/
      }
    }
  }
</style>
