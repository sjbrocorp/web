<template>
  <div class="ticket-messages">
    <ul class="ticket-messages__feed">
      <li
        v-for="message in ticket.messages"
        :key="message.id">
        {{ message.created_at }} - {{ message.owner.name }} <br>
        {{ message.body }}
      </li>
    </ul>
    <form
      class="ticket-messages__form"
      @submit.prevent="submitMessage">
      <label for="body">
        <textarea
          id="body"
          v-model="newMessage.body"
          name="body"
        />
      </label>
      <button
        type="submit"
        class="ticket-messages__submit">Submit Message</button>
    </form>
  </div>
</template>

<script>
import { alerts } from '@/services'
import { ticketStore } from '@/stores'
export default {
  props: {
    ticket: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      newMessage: {
        body: ''
      }
    }
  },
  methods: {
    async submitMessage () {
      try {
        await ticketStore.storeMessage(this.ticket, this.newMessage)
        alerts.success('Message sent')
        this.clear()
      } catch (error) {
        console.log(error)
      }
    },
    clear () {
      this.newMessage = {
        body: ''
      }
    }
  }
}
</script>

<style lang="scss">
  @import "~#/mixins";
  .ticket-messages {
    display: flex;
    flex-direction: column;
    &__feed {
      flex: 1;
    }
    &__form {
      flex: 1;
    }
    &__submit {
      @include submit-button();
      display: flex;
    }
  }
</style>
