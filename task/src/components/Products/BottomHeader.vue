<template>
  <div class="main-container-1">
    <div class="category-container-1">
      <img class="icon-1" src="../../assets/icons/categoryIcon.svg" alt="Category Icon" />
      <p class="category-text-1">All Categories</p>
      <img src="../../assets/icons/arrowDown.svg" alt="Dropdown Arrow" />
    </div>
    <div class="navigation-container-1">
      <div class="nav-item-1">
        <p class="nav-text-1" @click="goToHomePage()">Home</p>
        <img src="../../assets/icons/arrowDown.svg" alt="Dropdown Arrow" />
      </div>
      <div class="nav-item-1">
        <p class="nav-text-1">About</p>
        <img src="../../assets/icons/arrowDown.svg" alt="Dropdown Arrow" />
      </div>
      <div class="nav-item-1">
        <p class="nav-text accent-1">Product</p>
        <img class="accent-icon-1" src="../../assets/icons/arrowDown2.svg" alt="Dropdown Arrow" />
      </div>
      <div class="nav-item-1">
        <p class="nav-text-1">Pages</p>
        <img src="../../assets/icons/arrowDown.svg" alt="Dropdown Arrow" />
      </div>
      <div class="nav-item-1">
        <p class="nav-text-1">Contact</p>
        <img src="../../assets/icons/arrowDown.svg" alt="Dropdown Arrow" />
      </div>
    </div>
    <div class="contact-container-1">
      <img class="contact-icon-1" src="../../assets//icons/headset.svg" alt="Headset Icon" />
      <p class="contact-info-1">
        <span class="contact-text-1">contact us 24/7</span><br>
        <span class="contact-number-1">+12012987481</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods:{
    goToHomePage() {
      this.$router.push({ name: 'Home' });
    }
  },
};
</script>

<style scoped lang="scss">

</style>
