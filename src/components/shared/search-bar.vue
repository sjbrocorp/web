<template>
  <div class="search-bar">
    <input
      type="text"
      class="search-bar__input"
      placeholder="Search..."
    >
    <img
      class="search-bar__icon"
      src="static/img/search.png"
      alt="search">
  </div>
</template>

<style lang="scss" scoped>
  @import "~#/abstracts/variables";
  .search-bar {
    position: relative;
    width: 100%;
    text-align: right;

    &__input {
      width: 100%;
      outline: 1px solid $color-grey;
    }

    &__icon {
      height: 180%;
      position: absolute;
      top: -2px;
      right: -2px;
    }
  }
</style>
