<template>
  <div>
    <HomeMainSection />
    <SecondSection />
    <TrendsSection />
    <SliderSection />
    <Footer/>
  </div>
</template>

<script>
import HomeMainSection from "@/components/Home/HomeMainSection.vue";
import SecondSection from "@/components/Home/SecondSection.vue";
import TrendsSection from "@/components/Home/TrendsSection.vue";
import SliderSection from "@/components/Home/SliderSection.vue";
import Footer from "@/components/Home/Footer.vue";
export default {
  name: "Home",
  components: { HomeMainSection, SecondSection, TrendsSection, SliderSection, Footer },
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
};
</script>

<style></style>
