<template>
  <div class="main-header">
    Header
    <menu-bar/>
  </div>
</template>

<script>
import MenuBar from '@/components/shared/menu-bar.vue'
export default {
  components: { MenuBar }
}
</script>

<style lang="scss">
  .main-header {
    flex: 2;
  }
</style>
