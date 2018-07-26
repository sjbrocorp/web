<template>
  <section class="edit-ticket">
    <form
      class="edit-ticket__form"
      @submit.prevent="submitForm"
    >
      <div class="edit-ticket__header">
        You may update the ticket using the fields below.
      </div>
      <div class="edit-ticket__fields">
        <label
          for="email"
          class="edit-ticket__field edit-ticket__field--required">
          <span class="edit-ticket__label">
            Customer Email Address:
          </span>
          <input
            id="email"
            v-model="copiedTicket.email"
            class="edit-ticket__input"
            type="email"
            name="email"
            required
          >
        </label>
        <label
          for="name"
          class="edit-ticket__field edit-ticket__field--required">
          <span class="edit-ticket__label">
            Customer Full Name:
          </span>
          <input
            id="name"
            v-model="copiedTicket.name"
            class="edit-ticket__input"
            type="text"
            name="name"
            required>
        </label>
        <label
          for="contact"
          class="edit-ticket__field">
          <span class="edit-ticket__label">

            Other Contact:
          </span>
          <input
            id="contact"
            v-model="copiedTicket.contact"
            class="edit-ticket__input"
            type="text"
            name="contact">
        </label>
        <label
          for="telephone"
          class="edit-ticket__field">
          <span class="edit-ticket__label">

            Customer Telephone:
          </span>
          <input
            id="telephone"
            v-model="copiedTicket.telephone"
            class="edit-ticket__input"
            type="text"
            name="telephone">
        </label>
        <label
          for="extension"
          class="edit-ticket__field">
          <span class="edit-ticket__label">

            Ext:
          </span>
          <input
            id="extension"
            v-model="copiedTicket.extension"
            class="edit-ticket__input"
            type="text"
            name="extension">
        </label>
        <label
          for="description"
          class="edit-ticket__field edit-ticket__field--required">
          <span class="edit-ticket__label">
            Description:
          </span>
          <textarea
            id="description"
            v-model="copiedTicket.description"
            class="edit-ticket__input"
            name="description"
            required
          />
        </label>
        <label
          for="status"
          class="edit-ticket__field">
          <span class="edit-ticket__label">
            Status:
          </span>
          <select
            id="status"
            v-model="copiedTicket.status"
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
      <div class="edit-ticket__buttons">
        <button
          class="edit-ticket__submit"
          type="submit">Update</button>
      </div>
    </form>
  </section>
</template>

<script>
import { clone } from 'lodash'
import { config, event, router, alerts } from '@/services'
import { ticketStore } from '@/stores'
export default {
  data () {
    return {
      ticket: clone(ticketStore.stub),
      copiedTicket: clone(ticketStore.stub)
    }
  },
  created () {
    event.on({
      [config.events.LOAD_MAIN_VIEW]: (view, ticket) => {
        if (view === 'tickets/edit') {
          this.ticket = ticket
          this.copiedTicket = clone(ticket)
        }
      }
    })
  },
  methods: {
    async submitForm () {
      try {
        await ticketStore.update(this.ticket, this.copiedTicket)
        alerts.success('Ticket updated')
        this.ticket = clone(ticketStore.stub)
        this.copiedTicket = clone(ticketStore.stub)
        router.go('tickets')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">
  .edit-ticket {
    height: 100%;
    width: 100%;
    display: flex;
    &__header {
      padding-bottom: 3px;
      border-bottom: 1px solid rgba(grey, .4);
    }
    &__form {
      padding: 1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
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
