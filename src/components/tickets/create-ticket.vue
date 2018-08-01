<template>
  <div
    class="create-ticket">
    <ticket-form type="create">
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
      width: 100%;
      display: flex;
  }
</style>
