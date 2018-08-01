<template>
  <section class="login-page">
    <div class="login-page__content">
      <img
        class="login-page__logo u-margin-bottom-tiny"
        src="static/img/logo.jpg"
        alt="Comms Express Ticket Tracker">

      <div class="login-page__form-wrapper">
        <form
          class="form"
          @submit.prevent="login">
          <div class="form__group">
            <label
              class="form__label"
              for="email">Email:</label>
            <input
              id="email"
              v-model="formData.email"
              class="form__input"
              type="email"
              name="email">
          </div>
          <div class="form__group">
            <label
              class="form__label"
              for="password">Password:</label>
            <input
              id="password"
              v-model="formData.password"
              class="form__input"
              type="password"
              name="password">
          </div>
          <button
            class="btn btn--submit login-page__submit u-margin-top-small"
            type="submit"
          >Login</button>
        </form>
      </div>
    </div>
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

<style lang="scss" scoped>
  @import "~#/abstracts/variables";
  @import "~#/abstracts/mixins";
  .login-page {

    @include vertical-center;
    height: 100vh;
    width: 100%;
    background-color: $color-bgr-login;

    &__logo {
      height: 17rem;
      border: 5px solid $color-border-primary;
      padding: 2rem 3rem .4rem 3rem;
      background-color: $color-white;
    }

    &__form-wrapper {
      width: 80%;
      margin: 0 auto;
    }

    &__submit {
      float: right;
      margin-right: 2px;
    }
  }
</style>
