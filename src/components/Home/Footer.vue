<template>
  <div class="container-footer" data-aos="zoom-in" data-aos-duration="1500">
    <div class="header-section">
      <h1 class="main-title">antic</h1>
      <div class="sections">
        <div class="section" v-for="section in sections" :key="section.title">
          <h1 class="section-title">{{ section.title }}</h1>
          <p class="section-item" v-for="item in section.items" :key="item">
            {{ item }}
          </p>
        </div>
        <div class="planet-respect">
          <h1 class="section-title">We respect our planet</h1>
          <img src="../../assets/images/footer.png" alt="" />
          <p class="planet-description">
            We’re taking positive steps to reduce our impact on the planet. For
            us, that means retailing responsibly.
          </p>
          <p class="learn-more">Learn more</p>
        </div>
      </div>
    </div>
    <div class="social-media">
      <img src="../../assets/icons/Facebook.svg" alt="" />
      <img src="../../assets/icons/Twitter.svg" alt="" />
      <img src="../../assets/icons/Linkedin.svg" alt="" />
      <img src="../../assets/icons/Instagram.svg" alt="" />
    </div>
    <div class="footer">
      <p class="footer-text">© 2021 Agence Dnd</p>
      <div class="footer-links">
        <p class="footer-link">Privacy policy</p>
        <p class="footer-link">Term of service</p>
        <p class="footer-link">Language</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: "Products",
          items: ["Decoration", "Storage", "Baby and child", "Connected Home"],
        },
        {
          title: "Rooms",
          items: [
            "Living room",
            "Dining room",
            "Cooked",
            "Bedroom",
            "Bathroom",
            "Office",
            "Laundry",
            "Garage",
          ],
        },
        {
          title: "Services",
          items: [
            "Click and collect",
            "Conception",
            "Installation",
            "Advices",
            "Gift card",
          ],
        },
        {
          title: "About",
          items: ["Our story", "Our stores", "Our partners"],
        },
      ],
    };
  },
};
</script>
