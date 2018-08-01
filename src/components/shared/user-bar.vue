<template>
  <section class="user-bar">
    <div class="user-bar__message u-margin-bottom-tiny">
      Welcome back, <span class="user-bar__name">{{ currentUser.name }}</span>
    </div>
    <a
      href="#"
      class="user-bar__link"
      @click.prevent
    >Admin Panel</a>
    <a
      href="#"
      class="user-bar__link"
      @click.prevent>My Preference</a>
    <a
      href="#"
      class="user-bar__link"
      @click.prevent="logout">Log Out</a>
  </section>
</template>

<script>
import { userStore } from '@/stores'
export default {
  data () {
    return {
      state: userStore.state
    }
  },
  computed: {
    currentUser () {
      return this.state.current
    }
  },
  methods: {
    async logout () {
      try {
        await userStore.logout()
        location.reload()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~#/abstracts/variables";
  .user-bar {
    font-size: 1.1rem;
    text-align: right;

    &__link, {
      &:link,
      &:visited {
        padding-left: .5rem;
        color: $color-secondary-1;

        &:not(:last-child) {
          padding-right: .5rem;
          border-right: 1px solid black;
        }
      }
    }
    &__name {
      font-weight: 700;
    }
  }
</style>
