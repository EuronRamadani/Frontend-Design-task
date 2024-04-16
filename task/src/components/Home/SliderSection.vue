<template>
    <div>
      <div class="swiper-container">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="inspirations-container">
        <h1 class="inspiration-title">Inspirations</h1>
        <p class="inspiration-text">
          Our experts are keen to stay on top of trends in order to offer you
          new inspirations for your interior and exterior every day. Remember
          that to inspire you we have to inspire ourselves and we want to share
          that with you.
        </p>
        <div class="navigation-icons">
          <div class="icon-left">
            <img src="@/assets/icons/Left.svg" alt="" />
          </div>
          <div class="icon-right">
            <img src="@/assets/icons/Right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // new Swiper(".mySwiper", {
      //   slidesPerView: 4,
      //   spaceBetween: 30,
      //   centeredSlides: true,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //   },
      // });
    },
  };
  </script>
  
  <style scoped lang="scss">
  </style>
  