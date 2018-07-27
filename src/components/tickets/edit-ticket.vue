<template>
  <section class="edit-ticket">
    <ticket-form
      type="edit"
      class="edit-ticket__form">
      <span slot="header">You may update the ticket using the fields below.</span>
      <span slot="submit">Update Ticket</span>
    </ticket-form>
    <div class="edit-ticket__messages">
      <ticket-messages :ticket="ticket"/>
    </div>
  </section>
</template>

<script>
import TicketForm from '@/components/tickets/ticket-form.vue'
import TicketMessages from '@/components/tickets/ticket-messages.vue'
import { config, event } from '@/services'
import stub from '@/stubs/ticket'
export default {
  components: { TicketForm, TicketMessages },
  data () {
    return {
      ticket: stub
    }
  },
  created () {
    event.on({
      [config.events.LOAD_MAIN_VIEW]: (view, ticket) => {
        if (view === 'tickets/edit') {
          this.ticket = ticket
        }
      }
    })
  }
}
</script>

<style lang="scss">
  .edit-ticket {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .edit-ticket__form {
      flex: 1
    }
    .edit-ticket__messages {
      flex: 1;
      padding-top: 5px;
    }
  }
</style>
