<template>
  <section class="main-wrapper">
    <main-header class="main-wrapper__header"/>
    <main-content class="main-wrapper__content"/>
    <main-footer class="main-wrapper__footer"/>
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

<style lang="scss" scoped>
  @import "~#/abstracts/variables";
  @import "~#/abstracts/mixins";
  .main-wrapper {
    background-color: $color-bgr-primary;
    padding: 0 2rem 1rem 2rem;
    height: 100%;
    margin: 0 auto;

    width: 100rem;

    @include respond(tab-land) {
      width: 90rem;
    }
    @include respond(tab-port) {
      width: 70rem;
    }
    @include respond(phone) {
      width: 100%;
    }

    &__header {
      height: $header-height;

      @include respond(tab-land) {
        height: $header-height-medium;
      }
    }

    &__content {
      height: calc(100% - #{$header-height} - #{$footer-height});
      overflow: scroll;

      @include respond(tab-land) {
        height: calc(100% - #{$header-height-medium} - #{$footer-height});
      }
    }

    &__footer {
      height: $footer-height;
    }
  }
</style>
