<template>
  <div
    class="create-ticket">
    <ticket-form
      class="create-ticket__form"
      type="create">
      <span slot="header">Please fill in the form below to open a new ticket.</span>
      <span slot="submit">Create Ticket</span>
    </ticket-form>
  </div>
</template>

<script>
import TicketForm from '@/components/tickets/ticket-form.vue'
export default {
  components: { TicketForm }
}
</script>

<style lang="scss" scoped>
  .create-ticket {
    height: 100%;
    padding: 0 3rem;

    &__form {
      margin: 0 auto;
    }
  }
</style>
