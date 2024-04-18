<template>
  <div>
    <TopHeader />
    <div class="header-main-3">
      <h1 class="title-3">Needus.</h1>
      <div class="search-products-3">
        <div class="input-container-3">
          <input
            type="search"
            placeholder="Search Products"
            class="email-input-3"
          />
          <button class="search-button-3">
            <img src="../../assets//icons/search.svg" alt="Search" />
          </button>
        </div>
        <div class="category-selection-3">
          <div class="dropdown-3">
            <select name="All Categories" id="category" class="dropdown-select-3">
              <option value="">All Categories</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
              <option value="4">Category 4</option>
              <option value="5">Category 5</option>
            </select>
          </div>
          <p class="login-signup-3">
            <span>Login</span> | <span>Signup</span>
          </p>
        </div>
      </div>
      <div class="cart-icon-3">
        <i class="fa-regular fa-heart" style="width: 24px"></i>
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-badge-3">6</span>
      </div>
    </div>
    <BottomHeader />
  </div>
</template>

<script>
import TopHeader from "./TopHeader.vue";
import BottomHeader from "./BottomHeader.vue";
export default {
  components: { TopHeader, BottomHeader },
};
</script>

<style scoped lang="scss">

</style>
