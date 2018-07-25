<template>
  <div class="menu-bar">
    <div
      :class="{ 'menu-bar__link--active': currentView === 'tickets' }"
      class="menu-bar__link"
    >
      <a href="#!/tickets">Tickets</a>
    </div>
    <div
      class="menu-bar__link"
    >
      <a
        href="#"
        @click.prevent
      >Knowledge Base</a>
    </div>
    <div
      class="menu-bar__link"
    >
      <a
        href="#"
        @click.prevent
      >Directory</a>
    </div>
    <div
      class="menu-bar__link"
    >
      <a
        href="#"
        @click.prevent
      >My Account</a>
    </div>
    <div
      class="menu-bar__link"
    >
      <a
        class="menu-bar__link"
        href="#"
        @click.prevent
      >Returns System</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentView: ''
    }
  }
}
</script>

<style lang="scss">
  @import "~#/variables";
  .menu-bar {
    height: 2.5rem;
    line-height: 2.5rem;
    display: flex;
    justify-content: flex-end;
    color: $color-white;

    &__link {
      background: linear-gradient(#ff805b 50%, #ff5b2d 50%);
      border-radius: 4px 4px 0 0;
      padding: 0 2.2rem;
      margin: 1px;
      font-weight: bold;
      font-size: 1.2rem;

      &:hover {
        text-decoration: underline;
      }

      &--active {
        text-decoration: underline;
      }
    }
  }
</style>
