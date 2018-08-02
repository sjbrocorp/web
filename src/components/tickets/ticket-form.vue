<template>
  <form
    class="ticket-form form"
    @submit.prevent="submitForm">
    <div class="ticket-form__header">
      <slot name="header"/>
    </div>
    <div class="form__group form__group--required">
      <label
        for="email"
        class="form__label">
        Customer Email Address:
      </label>
      <input
        id="email"
        v-model="newTicket.email"
        class="form__input"
        type="email"
        name="email"
        required
      >
    </div>
    <div class="form__group form__group--required">
      <label
        for="name"
        class="form__label">
        Customer Full Name:
      </label>
      <input
        id="name"
        v-model="newTicket.name"
        class="form__input"
        type="text"
        name="name"
        required>
    </div>
    <div class="form__group">
      <label
        for="contact"
        class="form__label">
        Other Contact:
      </label>
      <input
        id="contact"
        v-model="newTicket.contact"
        class="form__input"
        type="text"
        name="contact">
    </div>
    <div class="form__group form__group--has-subgroup">
      <label
        for="telephone"
        class="form__label">
        Customer Telephone:
      </label>
      <input
        id="telephone"
        v-model="newTicket.telephone"
        class="form__input"
        type="text"
        name="telephone">
    </div>
    <div class="form__group form__group--subgroup">
      <label
        for="extension"
        class="form__label">
        Ext:
      </label>
      <input
        id="extension"
        v-model="newTicket.extension"
        class="form__input"
        type="text"
        name="extension">
    </div>
    <div class="form__group form__group--required">
      <label
        for="source"
        class="form__label">
        Source:
      </label>
      <vue-select
        id="source"
        v-model="newTicket.source"
        :options="sourceOptions"
        :settings="{
          width: '20rem',
          placeholder: 'Select an option',
        }"
        class="form__select"
        name="source"
        required/>
    </div>
    <div class="form__group">
      <label
        for="productType"
        class="form__label">
        Product Type:
      </label>
      <vue-select
        id="productType"
        v-model="newTicket.productType"
        :options="productTypeOptions"
        :settings="{
          width: '20rem',
          placeholder: 'Select an option',
        }"
        class="form__select"
        name="productType"
      />
    </div>
    <div class="form__group">
      <label
        for="problemType"
        class="form__label">
        Problem Type:
      </label>
      <vue-select
        id="problemType"
        v-model="newTicket.problemType"
        :options="problemTypeOptions"
        :settings="{
          width: '20rem',
          placeholder: 'Select an option',
        }"
        class="form__select"
        name="problemType"
      />
    </div>
    <div class="form__group form__group--required">
      <label
        for="description"
        class="form__label">
        Description:
      </label>
      <textarea
        id="description"
        v-model="newTicket.description"
        class="form__text"
        name="description"
        required
      />
    </div>
    <div
      v-if="type === 'edit'"
      class="form__group form__group--required">
      <label
        for="status"
        class="form__label">
        Source:
      </label>
      <vue-select
        id="status"
        v-model="newTicket.status"
        :options="statusOptions"
        :settings="{
          width: '20rem',
          placeholder: 'Select an option',
        }"
        class="form__select"
        name="status"
        required/>
    </div>
    <div class="ticket-form__buttons u-margin-bottom-small">
      <button
        class="btn btn--submit"
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
      newTicket: clone(ticketStore.stub),
      sourceOptions: ticketStore.$sources,
      productTypeOptions: ticketStore.$productTypes,
      problemTypeOptions: ticketStore.$problemTypes,
      statusOptions: ticketStore.$statuses
    }
  },
  created () {
    event.on({
      [config.events.LOAD_MAIN_VIEW]: (view, ticket) => {
        if (view === 'tickets/create') {
          this.existingTicket = null
          this.newTicket = clone(ticketStore.stub)
        }
        if (view === 'tickets/edit') {
          this.existingTicket = ticket
          this.newTicket = clone(ticket)
        }
      }
    })
  },
  methods: {
    async submitForm () {
      try {
        switch (this.type) {
          case 'create':
            await this.storeTicket()
            break
          case 'edit':
            await this.updateTicket()
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

<style lang="scss" scoped>
  @import "~#/abstracts/mixins";
  .ticket-form {
    height: 100%;
    &__header {
      font-size: 1.4rem;
      padding-bottom: 2px;
      margin-bottom: .5rem;
      border-bottom: 1px solid rgba(grey, .4);
    }
  }
</style>
