<template>
  <tr
    class="ticket-item ticket-list__row ticket-list__row--body"
    @click="editTicket">
    <td class="ticket-list__col ticket-list__col--name">{{ ticket.name }}</td>
    <td class="ticket-list__col ticket-list__col--email">{{ ticket.email }}</td>
    <td class="ticket-list__col ticket-list__col--contact">{{ ticket.contact }}</td>
    <td class="ticket-list__col ticket-list__col--telephone">{{ ticket.telephone }}</td>
    <td class="ticket-list__col ticket-list__col--extension">{{ ticket.extension }}</td>
    <td class="ticket-list__col ticket-list__col--description">{{ ticket.description }}</td>
    <td class="ticket-list__col ticket-list__col--status">{{ ticket.status }}</td>
  </tr>
</template>

<script>
import { router } from '@/services'
export default {
  props: {
    item: { type: Object, required: true }
  },
  computed: {
    ticket () {
      return this.item.ticket
    }
  },
  methods: {
    editTicket () {
      router.go(`tickets/${this.ticket.id}/edit`)
    }
  }
}
</script>
