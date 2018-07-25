<template>
  <div
    class="create-ticket">
    <form
      class="create-ticket__form"
      @submit.prevent="submitForm"
    >
      <div class="create-ticket__header">
        Please fill in the form below to open a new ticket.
      </div>
      <div class="create-ticket__fields">
        <label
          for="email"
          class="create-ticket__field create-ticket__field--required">
          <span class="create-ticket__label">
            Customer Email Address:
          </span>
          <input
            id="email"
            v-model="newTicket.email"
            class="create-ticket__input"
            type="email"
            name="email"
            required
          >
        </label>
        <label
          for="name"
          class="create-ticket__field create-ticket__field--required">
          <span class="create-ticket__label">
            Customer Full Name:
          </span>
          <input
            id="name"
            v-model="newTicket.name"
            class="create-ticket__input"
            type="text"
            name="name"
            required>
        </label>
        <label
          for="contact"
          class="create-ticket__field">
          <span class="create-ticket__label">

            Other Contact:
          </span>
          <input
            id="contact"
            v-model="newTicket.contact"
            class="create-ticket__input"
            type="text"
            name="contact">
        </label>
        <label
          for="telephone"
          class="create-ticket__field">
          <span class="create-ticket__label">

            Customer Telephone:
          </span>
          <input
            id="telephone"
            v-model="newTicket.telephone"
            class="create-ticket__input"
            type="text"
            name="telephone">
        </label>
        <label
          for="extension"
          class="create-ticket__field">
          <span class="create-ticket__label">

            Ext:
          </span>
          <input
            id="extension"
            v-model="newTicket.extension"
            class="create-ticket__input"
            type="text"
            name="extension">
        </label>
        <label
          for="description"
          class="create-ticket__field create-ticket__field--required">
          <span class="create-ticket__label">
            Description:
          </span>
          <textarea
            id="description"
            v-model="newTicket.description"
            class="create-ticket__input"
            name="description"
            required
          />
        </label>
      </div>
      <div class="create-ticket__buttons">
        <button
          class="create-ticket__submit"
          type="submit">Submit Ticket</button>
      </div>
    </form>
  </div>
</template>

<script>
import { clone } from 'lodash'
import { alerts, router } from '@/services'
import { ticketStore } from '@/stores'
export default {
  data () {
    return {
      newTicket: clone(ticketStore.stub)
    }
  },
  methods: {
    async submitForm () {
      try {
        await ticketStore.store(this.newTicket)
        alerts.success('Ticket created')
        this.newTicket = clone(ticketStore.stub)
        router.go('tickets')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">
  .create-ticket {
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
