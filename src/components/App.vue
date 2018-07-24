<template>
  <div class="app">
    <div
      v-if="authenticated"
      class="app__main">
      <main-content/>
    </div>
    <div
      v-else
      class="app__login">
      <login-form @loggedin="login"/>
    </div>
  </div>
</template>

<script>
import LoginForm from './auth/login-form.vue'
import MainContent from './layouts/main-content.vue'
import { cookie, event, router } from '@/services'
import { sharedStore, userStore } from '@/stores'
export default {
  components: {LoginForm, MainContent},
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
      try {
        await sharedStore.init()
        router.init()
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
