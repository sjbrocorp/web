<template>
  <div class="search-bar">
    <input
      type="text"
      class="search-bar__input">
    <img
      class="search-bar__icon"
      src="static/img/search.png"
      alt="search">
  </div>
</template>

<style lang="scss">
  .search-bar {
    padding-top: 3rem;
    text-align: right;
    &__input {
      width: 30%;
    }

    &__icon {
      position: absolute;
      transform: translate(-90%, -5%);
    }
  }
</style>
