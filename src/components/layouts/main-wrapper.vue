<template>
  <section class="main-wrapper">
    <main-header/>
    <main-content/>
    <main-footer/>
  </section>
</template>

<script>
import MenuBar from '@/components/shared/menu-bar.vue'
import MainHeader from '@/components/shared/main-header.vue'
import MainContent from '@/components/layouts/main-content.vue'
import MainFooter from '@/components/shared/main-footer.vue'
export default {
  components: { MenuBar, MainHeader, MainContent, MainFooter }
}
</script>

<style lang="scss">
  @import "~#/variables";
  .main-wrapper {
    background-color: $color-bgr-primary;
    width: 102rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem .5rem 2rem;
  }
</style>
