<template>
  <div>
    <div
      class="swiper-container"
      data-aos="zoom-in" data-aos-duration="1500"
    >
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in images" :key="item">
            <img :src="item" alt="" />
          </div>
          <!-- <div class="swiper-slide">2</div> -->
          <!-- <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div> -->
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="inspirations-container">
      <h1 class="inspiration-title">Inspirations</h1>
      <p class="inspiration-text">
        Our experts are keen to stay on top of trends in order to offer you new
        inspirations for your interior and exterior every day. Remember that to
        inspire you we have to inspire ourselves and we want to share that with
        you.
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
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      images: [
        require("../../assets/images/Slider1.svg"),
        require("../../assets/images/Slider2.svg"),
        require("../../assets/images/Slider3.svg"),
        require("../../assets/images/Slider4.svg"),
        require("../../assets/images/Slider2.svg"),
        require("../../assets/images/Slider4.svg"),
        require("../../assets/images/Slider1.svg"),
        require("../../assets/images/Slider4.svg"),
        require("../../assets/images/Slider3.svg"),
        require("../../assets/images/Slider4.svg"),
        // require('../../assets/images/Slider5.svg'),
      ],
    };
  },
  mounted() {
    new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
      speed: 1000,
      breakpoints: {
        320: { slidesPerView: 1 },
        480: { slidesPerView: 3 },
        640: { slidesPerView: 4 },
        800: { slidesPerView: 5 },
        960: { slidesPerView: 6 },
      },
    });
  },
};
</script>

<style scoped lang="scss"></style>
