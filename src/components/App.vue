<template>
  <div id="app">
    <div
      v-if="authenticated"
      class="app__main"
    >
      <main-wrapper/>
      <overlay/>
    </div>
    <div
      v-else
      class="app__login">
      <login-page @loggedin="login"/>
    </div>
  </div>
</template>

<script>
import LoginPage from './auth/login-page.vue'
import MainWrapper from './layouts/main-wrapper.vue'
import Overlay from '@/components/shared/overlay.vue'
import { cookie, event, router } from '@/services'
import { sharedStore, userStore } from '@/stores'
export default {
  components: { LoginPage, MainWrapper, Overlay },
  data () {
    return {
      authenticated: false
    }
  },
  mounted () {
    if (cookie.get('jwt-token')) {
      this.login()
    }
  },
  created () {
    event.on(event.$names.LOGOUT, () => this.logout())
  },
  methods: {
    async init () {
      event.emit(event.$names.SHOW_OVERLAY)
      try {
        await sharedStore.init()
        router.init()
        event.emit(event.$names.HIDE_OVERLAY)
      } catch (error) {
        console.log(error)
      }
    },
    login () {
      this.authenticated = true
      this.init()
    },
    async logout () {
      try {
        await userStore.logout()
        this.authenticated = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~#/abstracts/variables";
  .app {
    &__main {
      height: 100vh;
      background-color: $color-bgr-secondary;
    }
  }
</style>
