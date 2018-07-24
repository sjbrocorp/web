<template>
  <tr class="ticket-item">
    <td class="ticket-item__field ticket-item__field--name">{{ ticket.name }}</td>
    <td class="ticket-item__field ticket-item__field--email">{{ ticket.email }}</td>
    <td class="ticket-item__field ticket-item__field--contact">{{ ticket.contact }}</td>
    <td class="ticket-item__field ticket-item__field--telephone">{{ ticket.telephone }}</td>
    <td class="ticket-item__field ticket-item__field--extension">{{ ticket.extension }}</td>
    <td class="ticket-item__field ticket-item__field--description">{{ ticket.description }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true }
  },
  computed: {
    ticket () {
      return this.item.ticket
    }
  }
}
</script>
