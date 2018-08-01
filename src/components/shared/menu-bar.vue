<template>
  <div class="menu-bar">
    <a
      :class="{ 'menu-bar__link--active': currentView === 'tickets' }"
      class="menu-bar__link"
      href="#!/tickets">
      Tickets
    </a>
    <a
      class="menu-bar__link"
      href="#">
      Knowledge Base
    </a>
    <a
      class="menu-bar__link"
      href="#">
      Directory
    </a>
    <a
      class="menu-bar__link"
      href="#"
    >My Account
    </a>
    <a
      class="menu-bar__link"
      href="#"
    >Returns System
    </a>

  </div>
</template>

<script>
import { event } from '@/services'
export default {
  data () {
    return {
      currentView: ''
    }
  },
  created () {
    event.on(event.$names.LOAD_MAIN_VIEW, (view) => {
      this.currentView = view
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "~#/abstracts/variables";
  .menu-bar {
    line-height: 2rem;

    &__link {
      &:link,
      &:visited {
        background: linear-gradient(#ff805b 50%, #ff5b2d 50%);
        color: $color-white;
        border-radius: 0 0 4px 4px;
        padding: 4px 1.5rem;
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 2rem;

        &:not(:last-child) {
          margin-right: 1px;
        }

      }
      &:hover {
        text-decoration: underline;
      }

      &--active {
        text-decoration: underline;
      }
    }
  }
</style>
