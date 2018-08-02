<template>
  <select class="vue-select">
    <option value>Hi there</option>
    <slot/>
  </select>
</template>
<script>
import $ from 'jquery'
import 'select2'
export default {
  props: {
    'options': {
      type: Array,
      default: function () {
        return [
          { id: 1, text: 'Hello' },
          { id: 2, text: 'World' }
        ]
      }
    },
    'value': {
      type: Number,
      default: 0
    }
  },
  watch: {
    value: value => {
      $(this.$el)
        .val(value)
        .trigger('change')
    },
    options: options => {
      $(this.$el).empty().select2({ data: options })
    }
  },
  mounted () {
    const vm = this
    $(this.$el)
      .select2({
        data: this.options,
        placeholder: 'Select an option'
      })
      .val(this.value)
      .trigger('change')
      .on('change', () => {
        vm.$emit('input', this.value)
      })
  },
  destroyed () {
    $(this.$el).off().select2('destroy')
  }
}
</script>
