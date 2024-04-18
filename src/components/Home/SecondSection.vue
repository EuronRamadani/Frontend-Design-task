<template>
  <div class="container"
  >
    <div class="main-section"
    data-aos="fade-left"
    data-aos-duration="1500">
      <div class="text-content">
        <h1 class="main-heading">
          We stay by your <br> side to design <br> your projects
        </h1>
        <p class="more-info">
          Find out more <i class="fa fa-solid fa-chevron-right"></i>
        </p>
      </div>
    </div>
    <div class="services-container" data-aos="fade-down" data-aos-duration="1500"
>
      <div class="service" v-for="service in services" :key="service.title">
        <h2 class="service-title">{{ service.title }}</h2>
        <p class="service-description">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'Our Advices',
          description: 'What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.'
        },
        {
          title: 'Click and Collect',
          description: 'Adapted and contactless. Free from € 200 of purchases in stores offering the service.'
        },
        {
          title: 'Conception Service',
          description: 'Personalized service with an expert advisor for your interior and exterior decoration or layout projects.'
        },
        {
          title: 'Installation Service',
          description: 'Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.'
        }
      ]
    };
  }
}
</script>
  
<style scoped lang="scss">

</style>
