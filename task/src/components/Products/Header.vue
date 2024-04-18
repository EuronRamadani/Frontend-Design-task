<template>
  <div>
    <TopHeader />
    <div
      style="display: flex; justify-content: space-around; align-items: center"
    >
      <h1>Needus.</h1>
      <div class="search-products">
        <div style="display: flex; align-items: center">
          <input
            type="search"
            placeholder="Search Products"
            class="email-input"
            style="
              font-size: 20px;
              color: #969696;
              background-color: #ffffff;
              font-weight: 300;
              height: 76px;
              padding-left: 30px;
            "
          />
          <button class="search-button">
            <img src="../../assets//icons/search.svg" alt="" />
          </button>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0 30px;
            border-left: 1px solid #F0F0F0;
            margin-left: 5px;
          "
        >
          <div class="dropdown">
            <select name="All Categories" id="category" class="dropdown-select">
              <option value="">All Categories</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
              <option value="4">Category 4</option>
              <option value="5">Category 5</option>
            </select>
          </div>
          <p style="color: #191919; font-size: 20px; font-weight: 300">
            <span>Login</span> | <span>Signup</span>
          </p>
        </div>
      </div>
      <div class="cart-icon">
        <i style="width: 24px" class="fa-regular fa-heart"></i>
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-badge">6</span>
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
.search-products {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 1rem;
  border: 1px solid #f0f0f0;
  width: 950px;

  .email-input {
    padding: 0.5rem;
    margin-right: 0.5rem;
    background-color: #f3eee84d;
    border: 0;
    font-size: 18px;
    font-weight: 400;
  }

  .search-button {
    // padding: 8px 30px;
    // border: none;
    width: 65px;
    height: 65px;
    background-color: #2f333a;
    display: flex;
    justify-content: center;
    align-items: center;
    // color: white;
    // font-size: 1rem;
    cursor: pointer;
    // gap: 10px;

    &:hover {
      background-color: #555;
    }
  }
}

.cart-icon {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 2px 6px;
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 0.75rem;
}

.dropdown {
  position: relative;
  font-size: 20px;
  width: 200px; /* Adjust as needed */
  // margin-bottom: 1rem;
}

.dropdown-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 300;
  color: #191919;
}

.dropdown-select {
  width: 100%;
  padding: 0.5rem;
  border: 0;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 300;
  color: #191919;
  -webkit-appearance: none; /* Removes default chrome and safari style */
  -moz-appearance: none; /* Removes default style Firefox */
  appearance: none; /* Removes default browser style*/
  background-color: #fff;
  position: relative;
}

.dropdown-select:focus {
  outline: none;
  border-color: #191919;
}

.dropdown::after {
  content: "\25BC";
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  pointer-events: none;
  // color: #191919;
}
</style>
