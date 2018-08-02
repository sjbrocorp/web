<template>
  <div class="main-footer">
    <div class="row main-footer__content">
      <div class="col-1-of-3 main-footer__address">
        <span class="main-footer__highlight">Comms Express Limited</span> <br>
        Unit 7 Grafton Place <br>
        Dukes Park Ind Estate <br>
        Chelmsford <br>
        Essex <br>
        CM2 6TG
      </div>
      <div class="col-1-of-3 main-footer__contact">
        <font-awesome-icon
          class="main-footer__highlight"
          icon="phone"
        /> 0800 488 0000 <br>
        <font-awesome-icon
          class="main-footer__highlight"
          icon="fax"
        /> 0845 2000 257
      </div>
      <div class="col-1-of-3 main-footer__copyright">
        Copyright © 2004 - 2018 <br>
        Comms Express Limited. <br>
        All rights reserved. E&OE.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~#/abstracts/variables";
  @import "~#/abstracts/mixins";
  .main-footer {
    background-color: $color-primary-1;

    &__content {
      padding: 1rem 1rem 4rem 1rem;
      color: $color-white;
      font-size: 1.2rem;
      width: 50%;

      @include respond(tab-port) {
        width: 100%;
      }
    }
    &__highlight {
      color: #ff6633;
    }
  }
</style>
