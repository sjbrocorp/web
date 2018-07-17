<template>
  <section class="login-form">
    <form @submit.prevent="login">
      <input
        v-model="formData.email"
        type="email"
        name="email"
        placeholder="Email">
      <input
        v-model="formData.password"
        type="password"
        name="password"
        placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </section>
</template>

<script>
import { userStore } from '@/stores'
export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        await userStore.login(this.formData)
        this.formData.password = ''
        this.$emit('loggedin')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
