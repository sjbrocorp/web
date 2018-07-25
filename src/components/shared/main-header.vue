<template>
  <div class="main-header">
    <div class="main-header__content">
      <div class="main-header__message">
        Welcome back, <span class="main-header__username">{{ currentUser.name }}</span>
      </div>
      <div class="main-header__options">
        <a
          href="#"
          @click.prevent
        >Admin Panel</a>
        <a
          href="#"
          @click.prevent>My Preference</a>
        <a
          href="#"
          @click.prevent="logout">Log Out</a>
      </div>
    </div>
    <search-bar/>
    <menu-bar class="main-header__menu"/>
  </div>
</template>

<script>
import { userStore } from '@/stores'
import SearchBar from '@/components/shared/search-bar.vue'
import MenuBar from '@/components/shared/menu-bar.vue'
export default {
  components: { MenuBar, SearchBar },
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

<style lang="scss">
  .main-header {
    flex: 3;
    padding-top: 1rem;
    position: relative;

    &__content {
      display: block;
      font-size: 1.08rem;
      text-align: right;
    }

    &__username {
      font-weight: bold;
    }

    &__options {
      color: #ff7c01;
      & > * {
        padding: 0 5px 0 2px;

        border-right: solid 1px black;

        &:last-child {
          border-right: none;
        }
      }
    }

    &__menu {
      width: 100%;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
</style>
