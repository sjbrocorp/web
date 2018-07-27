<template>
  <section class="edit-ticket">
    <ticket-form type="edit">
      <span slot="header">You may update the ticket using the fields below.</span>
      <span slot="submit">Update Ticket</span>
    </ticket-form>
  </section>
</template>

<script>
import TicketForm from '@/components/tickets/ticket-form.vue'
export default {
  components: { TicketForm }
}
</script>

<style lang="scss">
  .edit-ticket {
    height: 100%;
    width: 100%;
    display: flex;
  }
</style>
