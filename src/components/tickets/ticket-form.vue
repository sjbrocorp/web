<template>
  <form
    class="ticket-form"
    @submit.prevent="submitForm">
    <div class="ticket-form__header">
      <slot name="header"/>
    </div>
    <div class="ticket-form__fields">
      <label
        for="email"
        class="ticket-form__field ticket-form__field--required">
        <span class="ticket-form__label">
          Customer Email Address:
        </span>
        <input
          id="email"
          v-model="newTicket.email"
          class="ticket-form__input"
          type="email"
          name="email"
          required
        >
      </label>  <label
        for="name"
        class="ticket-form__field ticket-form__field--required">
        <span class="ticket-form__label">
          Customer Full Name:
        </span>
        <input
          id="name"
          v-model="newTicket.name"
          class="ticket-form__input"
          type="text"
          name="name"
          required>
      </label>
      <label
        for="contact"
        class="ticket-form__field">
        <span class="ticket-form__label">

          Other Contact:
        </span>
        <input
          id="contact"
          v-model="newTicket.contact"
          class="ticket-form__input"
          type="text"
          name="contact">
      </label>
      <label
        for="telephone"
        class="ticket-form__field">
        <span class="ticket-form__label">

          Customer Telephone:
        </span>
        <input
          id="telephone"
          v-model="newTicket.telephone"
          class="ticket-form__input"
          type="text"
          name="telephone">
      </label>
      <label
        for="extension"
        class="ticket-form__field">
        <span class="ticket-form__label">

          Ext:
        </span>
        <input
          id="extension"
          v-model="newTicket.extension"
          class="ticket-form__input"
          type="text"
          name="extension">
      </label>
      <label
        for="description"
        class="ticket-form__field ticket-form__field--required">
        <span class="ticket-form__label">
          Description:
        </span>
        <textarea
          id="description"
          v-model="newTicket.description"
          class="ticket-form__input"
          name="description"
          required
        />
      </label>
      <label
        v-if="type === 'edit'"
        for="status"
        class="ticket-form__field"
      >
        <span class="ticket-form__label">
          Status:
        </span>
        <select
          id="status"
          v-model="newTicket.status"
          name="status"
        >
          <option value="Pending">Pending</option>
          <option value="Investigating">Investigating</option>
          <option value="Awaiting Reply">Awaiting Reply</option>
          <option value="Solved">Solved</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
    </div>
    <div class="ticket-form__buttons">
      <button
        class="ticket-form__submit"
        type="submit"><slot name="submit"/></button>
    </div>
  </form>
</template>

<script>
import { clone } from 'lodash'
import { ticketStore } from '@/stores'
import { alerts, config, event, router } from '@/services'
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      existingTicket: null,
      newTicket: clone(ticketStore.stub)
    }
  },
  created () {
    event.on({
      [config.events.LOAD_MAIN_VIEW]: (view, ticket) => {
        if (view === 'tickets/edit') {
          this.existingTicket = ticket
          this.newTicket = clone(ticket)
        }
      }
    })
  },
  methods: {
    submitForm () {
      try {
        switch (this.type) {
          case 'create':
            this.storeTicket()
            break
          case 'edit':
            this.updateTicket()
            break
        }
        router.go('tickets')
      } catch (error) {
        console.log(error)
      }
    },
    async storeTicket () {
      await ticketStore.store(this.newTicket)
      alerts.success('Ticket created')
      this.newTicket = clone(ticketStore.stub)
    },
    async updateTicket () {
      await ticketStore.update(this.existingTicket, this.newTicket)
      alerts.success('Ticket updated')
      this.existingTicket = null
      this.newTicket = clone(ticketStore.stub)
    }
  }
}
</script>

<style lang="scss">
  .ticket-form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    &__header {
      padding-bottom: 3px;
      border-bottom: 1px solid rgba(grey, .4);
    }

    &__fields {
      padding: 5px;
      height: 90%;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid rgba(grey, .4);
    }
    &__field {
      padding: 3px 0;
      &--required {

        font-weight: bold;

        &::after {
          content: " *";
          color: red;
        }
      }
    }
    &__label {
      width: 20%;
      display: inline-block;
    }
    &__input {
      width: 30%;
    }
    &__buttons {
      padding-top: 5px;
      display: flex;
      justify-content: flex-end;
    }
    &__submit {
      background-color: #DB8606;
      border: 1px solid #666;
      color: #fff;
      padding: 1px 7px;
      margin-right: 2.5rem;
      text-shadow: rgb(51,51,51) -1px -1px 0;

    }
  }
</style>