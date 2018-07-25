<template>
  <div
    v-if="showing"
    class="overlay">
    <div class="overlay__display">
      <font-awesome-icon
        icon="spinner"
        spin
      />
      Loading...
    </div>
  </div>
</template>

<script>
import { event } from '@/services'
export default {
  data () {
    return {
      showing: true
    }
  },
  created () {
    event.on({
      [event.$names.SHOW_OVERLAY]: () => this.show(),
      [event.$names.HIDE_OVERLAY]: () => this.hide()
    })
  },
  methods: {
    show () {
      this.showing = true
    },
    hide () {
      this.showing = false
    }
  }
}
</script>

<style lang="scss">
  @import "~#/mixins";
  @import "~#/variables";
  .overlay {
    background-color: $color-overlay;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @include vertical-center();

    &__display {
      font-size: 3rem;
    }
  }
</style>
