<template>
  <div>
    <Header />
    <TitleProduct />
    <MainProductDetails />
    <ProductSpecs />
    <RelatedProducts />
    <NewsLetterPart />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Products/Header.vue";
import TitleProduct from "../components/Products/TitleProduct.vue";
import MainProductDetails from "../components/Products/MainProductDetails.vue";
import ProductSpecs from "../components/Products/ProductSpecs.vue";
import RelatedProducts from "../components/Products/RelatedProducts.vue";
import NewsLetterPart from "../components/Products/NewsLetterPart.vue";
import Footer from "../components/Products/Footer.vue";
export default {
  name: "Product-item",
  components: {
    Header,
    TitleProduct,
    MainProductDetails,
    ProductSpecs,
    RelatedProducts,
    NewsLetterPart,
    Footer,
  },
};
</script>
