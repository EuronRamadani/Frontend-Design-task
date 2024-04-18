<template>
  <div>
    <h1 class="titleRelated">Related Products</h1>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in items" :key="item.id">
          <div class="product-container">
            <div :class="item.hasIcon ? 'label-container' : 'label-container2'">
              <p
                class="label-new"
                :style="{ 'background-color': item.backgroundColor }"
              >
                {{ item.promo }}
              </p>
              <p class="icon-heart" v-show="item.hasIcon">
                <img src="../../assets/icons/heart.svg" alt="" />
              </p>
            </div>
            <div class="product-image">
              <img :src="item.imageUrl" :alt="item.title" />
            </div>
            <div class="add-to-cart">
              <button>🛒 Add to cart</button>
            </div>
          </div>
          <div class="product-info">
            <p class="product-title">{{ item.title }}</p>
            <p class="product-price">
              <span class="current-price">{{ item.currentPrice }}</span>
              <span v-if="item.hasSecondPrice" class="original-price">{{
                item.originalPrice
              }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="custom-pagination">
        <span
          v-for="n in numberOfPages"
          :key="n"
          class="pagination-bullet"
          :class="{ active: n === currentPage }"
          @click="goToPage(n)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
export default {
  mounted() {
    new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
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
  data() {
    return {
      data: [
        { id: 1, name: "Test" },
        { id: 2, name: "Test2" },
        { id: 3, name: "Test3" },
      ],
      currentPage: 1,
      numberOfPages: 4,
      items: [
        {
          id: 1,
          title: "Sony BRAVIA XR Android Tv",
          currentPrice: "$800.22",
          originalPrice: "$1000.66",
          imageUrl: require("../../assets/images/relatedProduct1.svg"),
          hasIcon: true,
          hasSecondPrice: true,
          backgroundColor: "#12A05C",
          promo: "new",
        },
        {
          id: 2,
          title: "Mi P1 Smart Android HD TV",
          currentPrice: "$400.00",
          originalPrice: "$1000.66",
          hasSecondPrice: false,
          imageUrl: require("../../assets/images/relatedProduct3.svg"),
          hasIcon: false,
          backgroundColor: "#E73C17",
          promo: "-10%",
        },
        {
          id: 3,
          title: "Konka OLED Android Tv",
          currentPrice: "$700.00",
          originalPrice: "$1000.66",
          hasSecondPrice: false,
          imageUrl: require("../../assets/images/relatedProduct3.svg"),
          hasIcon: false,
          backgroundColor: "#FF9900",
          promo: "Hot",
        },
        {
          id: 4,
          title: "TCL Roku Android Tv",
          currentPrice: "$800.00",
          originalPrice: "$1000.66",
          hasSecondPrice: false,
          imageUrl: require("../../assets/images/relatedProduct3.svg"),
          hasIcon: false,
          backgroundColor: "#7F7CF6",
          promo: "2 Years Warranty",
        },
        {
          id: 5,
          title: "Sony BRAVIA XR Android Tv",
          currentPrice: "$800.22",
          originalPrice: "$1000.66",
          imageUrl: require("../../assets/images/relatedProduct1.svg"),
          hasIcon: false,
          hasSecondPrice: true,
          backgroundColor: "#12A05C",
          promo: "new",
        },
        {
          id: 6,
          title: "TCL Roku Android Tv",
          currentPrice: "$800.00",
          originalPrice: "$1000.66",
          hasSecondPrice: false,
          imageUrl: require("../../assets/images/relatedProduct3.svg"),
          hasIcon: false,
          backgroundColor: "#7F7CF6",
          promo: "2 Years Warranty",
        },
        {
          id: 7,
          title: "Konka OLED Android Tv",
          currentPrice: "$700.00",
          originalPrice: "$1000.66",
          hasSecondPrice: false,
          imageUrl: require("../../assets/images/relatedProduct3.svg"),
          hasIcon: false,
          backgroundColor: "#FF9900",
          promo: "Hot",
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
