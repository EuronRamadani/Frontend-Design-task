<template>
  <div class="main-container">
    <div class="first-section">
      <div class="header-container">
        <h1 class="title">Antic</h1>
        <div class="nav-links">
          <router-link to="/products" tag="p">Products</router-link>
          <router-link to="#" tag="p">Rooms</router-link>
          <router-link to="#" tag="p">Services</router-link>
          <router-link to="#" tag="p">Inspirations</router-link>
        </div>
      </div>
      <div class="content-container">
        <p class="subtitle">Home design</p>
        <div class="main-content">
          <h1 class="heading">
            Elegance for<br />
            Interiors & <br />Exteriors
          </h1>
          <p class="description">
            We provide everyone with modern,<br />
            trendy, quality furniture
          </p>
        </div>
        <div class="scroll-indicator" @click="scrollDown">
          <img src="@/assets/icons/Down.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="second-section" ref="secondSection">
      <img src="../../assets/icons/Contact.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollDown() {
      window.scrollBy({ top: 1000, behavior: 'smooth' });
    }
  }
}
</script>
