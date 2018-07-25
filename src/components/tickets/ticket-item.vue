<template>
  <tr class="ticket-item ticket-list__row">
    <td class="ticket-list__col ticket-list__col--header ticket-list__col--name">{{ ticket.name }}</td>
    <td class="ticket-list__col ticket-list__col--header ticket-list__col--email">{{ ticket.email }}</td>
    <td class="ticket-list__col ticket-list__col--header ticket-list__col--contact">{{ ticket.contact }}</td>
    <td class="ticket-list__col ticket-list__col--header ticket-list__col--telephone">{{ ticket.telephone }}</td>
    <td class="ticket-list__col ticket-list__col--header ticket-list__col--extension">{{ ticket.extension }}</td>
    <td class="ticket-list__col ticket-list__col--header ticket-list__col--description">{{ ticket.description }}</td>
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
