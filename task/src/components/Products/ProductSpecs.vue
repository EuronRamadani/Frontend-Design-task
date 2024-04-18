<template>
  <div class="tab-container">
    <div class="tabs">
      <div
        class="tab"
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: tab.name === activeTab }"
        @click="changeTab(tab.name)"
      >
        {{ tab.name }}
      </div>
    </div>
    <div class="content">
      <div v-show="activeTab === 'Description'" class="content-text">
        The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV
        we've tested. Although all OLEDs deliver similar fantastic picture
        quality, this one stands out for its value because it has many gaming
        oriented features that are great for gamers. <br />
        <br />
        *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED
        models feature eco-friendly packaging. <br /><br />**65C2 Stand model is
        at a minimum 39% lighter than the C1 series.
      </div>
      <div v-show="activeTab === 'Specification'" class="content-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis,
        metus eu rhoncus efficitur, turpis sem tempus massa, id consectetur nunc
        purus in lectus. Donec non velit a odio volutpat volutpat in in nisi.
        Maecenas aliquet turpis lacus, id pharetra elit sagittis vel. Ut
        consectetur nisi quis ullamcorper pellentesque. Integer efficitur
        interdum nunc, ut elementum nulla. Phasellus feugiat nulla et rhoncus
        porttitor. Nullam at lectus sed turpis porttitor viverra accumsan
        hendrerit lorem. Praesent tincidunt nisi at nunc suscipit malesuada.
      </div>
      <div v-show="activeTab === 'Reviews'" class="content-text">
        Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam
        tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean magna
        massa, tempus quis risus nec, sollicitudin consectetur mi. Donec dictum
        nulla sed nulla semper elementum. Nulla dictum ultrices risus, id ornare
        arcu rutrum vel. Curabitur vestibulum id nisi at pellentesque. Aenean a
        lacinia tellus. Aliquam iaculis odio sit amet velit laoreet, non feugiat
        tellus elementum.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "Description",
      tabs: [
        { name: "Description" },
        { name: "Specification" },
        { name: "Reviews" },
      ],
    };
  },
  methods: {
    changeTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>


