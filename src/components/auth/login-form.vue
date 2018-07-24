<template>
  <form
    class="login-form"
    @submit.prevent="login">
    <img
      class="login-form__logo"
      src="static/img/logo.jpg"
      alt="Comms Express Ticket Tracker">
    <div class="login-form__row">
      <label
        class="login-form__label"
        for="email">Email:</label>
      <input
        id="email"
        v-model="formData.email"
        class="login-form__input"
        type="email"
        name="email">
    </div>
    <div class="login-form__row">
      <label
        class="login-form__label"
        for="password">Password:</label>
      <input
        id="password"
        v-model="formData.password"
        class="login-form__input"
        type="password"
        name="password">
    </div>
    <div class="login-form__row">
      <button
        class="login-form__submit"
        type="submit"
      >Login</button>
    </div>
  </form>
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

<style lang="scss">
  @import "~#/variables";
  .login-form {
    transform: translateY(-10%);
    width: 35rem;

    &__logo {
      width: 100%;
      border: 5px solid $color-border-primary;
      padding: 2rem 3rem .4rem 3rem;
    }

    &__row {
      padding: 3px 2.5rem;
      display: flex;
    }

    &__label {
      font-size: 1.6rem;
      font-weight: 700;
      width: 40%;
      text-align: right;
      padding-right: 5px;
      display: block;
    }

    &__input {
      flex: 1;
      border-top-color: rgb(238, 238, 238);
      border-top-width: 2px;
    }

    &__submit {
      background-color: #DB8606;
      border: 1px solid #666;
      color: #fff;
      padding: 1px 7px;
      margin-right: 2.5rem;
      text-shadow: rgb(51,51,51) -1px -1px 0;
      position: absolute;
      right: 0;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
