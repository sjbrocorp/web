<template>
  <div class="main-header">
    <menu-bar class="main-header__menu"/>
    <user-bar/>
  </div>
</template>

<script>
import MenuBar from '@/components/shared/menu-bar.vue'
import UserBar from '@/components/shared/user-bar.vue'
export default {
  components: { MenuBar, UserBar }
}
</script>

<style lang="scss" scoped>
  .main-header {
    padding: 1rem;
    &__menu {
      float: left;
    }
  }
</style>
