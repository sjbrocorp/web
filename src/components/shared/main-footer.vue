<template>
  <div class="main-footer">
    <div class="main-footer__content">
      <div class="main-footer__address">
        <span class="main-footer__highlight">Comms Express Limited</span> <br>
        Unit 7 Grafton Place <br>
        Dukes Park Ind Estate <br>
        Chelmsford <br>
        Essex <br>
        CM2 6TG
      </div>
      <div class="main-footer__contact">
        <font-awesome-icon
          class="main-footer__highlight"
          icon="phone"
        /> 0800 488 0000 <br>
        <font-awesome-icon
          class="main-footer__highlight"
          icon="fax"
        /> 0845 2000 257
      </div>
      <div class="main-footer__copyright">
        Copyright © 2004 - 2018 <br>
        Comms Express Limited. <br>
        All rights reserved. E&OE.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "~#/variables";
  .main-footer {
    flex: 3;
    background-color: #2D225C;

    &__content {
      width: 65%;
      display: flex;
      color: $color-white;
      font-size: 1.2rem;

      & > * {
        padding: 1rem;
      }
    }
    &__contact {
    }
    &__highlight {
      color: #ff6633;
    }
  }
</style>
