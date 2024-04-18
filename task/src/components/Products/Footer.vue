<template>
    <div class="ecommerce-container">
      <div class="content">
        <div class="block" v-for="section in sections" :key="section.title">
          <p class="title">{{ section.title }}</p>
          <p class="description" v-if="section.description">{{ section.description }}</p>
          <div class="icons" v-if="section.icons">
            <img v-for="icon in section.icons" :src="icon.src" :alt="icon.alt" :key="icon.alt"/>
          </div>
          <p class="info" v-for="item in section.items" :key="item">{{ item }}</p>
        </div>
        <div class="block">
          <p class="title">{{ contactUs.title }}</p>
          <p class="info">
            If you have any query, please contact us <br />
            <span class="email">{{ contactUs.email }}</span>
          </p>
          <p class="info location">
            <img src="../../assets/icons/footer-location.svg" alt="Location" />
            {{ contactUs.location }}
          </p>
          <p class="info phone">
            <img src="../../assets/icons/footer-phone.svg" alt="Phone" />
            {{ contactUs.phone }}
          </p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="copyright">
        <p>
          Copyright. 2023 All Right Reserved
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sections: [
          {
            title: 'About Us',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet neque libero sunt numquam pariatur eaque ipsum animi non voluptas. Exercitationem.',
            icons: [
              { src: require('../../assets/icons/footer-fb.svg'), alt: 'Facebook' },
              { src: require('../../assets/icons/footer-whatsup.svg'), alt: 'WhatsApp' },
              { src: require('../../assets/icons/footer-instagram.svg'), alt: 'Instagram' },
              { src: require('../../assets/icons/footer-youtube.svg'), alt: 'YouTube' }
            ]
          },
          {
            title: 'Information',
            items: [
              'About', 'Delivery information', 'Privacy Policy', 'Sales', 'Terms & Conditions', 'EMI Payment'
            ]
          },
          {
            title: 'ACCOUNT',
            items: [
              'My Account', 'My Orders', 'Returns', 'Shipping', 'Wishlist', 'Account Details'
            ]
          },
          {
            title: 'Store',
            items: [
              'Affiliate', 'Discounts', 'Sale', 'Contact', 'All Collections'
            ]
          }
        ],
        contactUs: {
          title: 'Contact Us',
          email: 'needus24@gmail.com',
          location: 'California, USA',
          phone: '+12012987481'
        }
      };
    }
  }
  </script>
  
  <style>
  
  </style>
  