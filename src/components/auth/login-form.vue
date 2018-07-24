<template>
  <form
    class="login-form"
    @submit.prevent="login">
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
    <button
      class="login-form__submit"
      type="submit"
    >Login</button>
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
  .login-form {
    transform: translateY(-3rem);
    width: 35rem;

    &::before {
      border: 5px solid #ddd;
      content: " ";
      display: block;
      background: url(/static/img/logo.jpg);
      background-size: 27rem;
      background-repeat: no-repeat;
      background-position: 50% 85%;
      height: 16rem;
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
      margin-top: .7rem;
      margin-right: 2.5rem;
      text-shadow: rgb(51,51,51) -1px -1px 0;
      float: right;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
