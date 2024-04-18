<template>
  <div style="display: flex">
    <div style="display: flex; width: 100%; padding: 50px">
      <div style="padding: 30px">
        <div
          style="border: 1px solid #e73c17; padding: 20px; margin: 0 0 15px 0"
        >
          <img src="../../assets/images/productPhoto1.svg" alt="" />
        </div>
        <div style="border: 1px solid #f0f0f0; padding: 20px; margin: 15px 0">
          <img src="../../assets/images/productPhoto1.svg" alt="" />
        </div>
        <div style="border: 1px solid #f0f0f0; padding: 20px; margin: 15px 0">
          <img src="../../assets/images/productPhoto1.svg" alt="" />
        </div>
        <div style="border: 1px solid #f0f0f0; padding: 20px; margin: 15px 0">
          <img src="../../assets/images/productPhoto1.svg" alt="" />
        </div>
      </div>
      <div style="margin: 30px 40px">
        <div style="background-color: #f1f1f1; padding: 100px 30px">
          <img src="../../assets/images/mainProductImage.svg" alt="" />
        </div>
        <p style="color: #6F6F6F; font-size: 15px; font-weight: 300;">*LG C2 42 (106cm) 4K Smart OLED evo TV</p>
      </div>
    </div>
    <div style="width: 100%; padding: 50px">
      <div>
        <p>
          <span style="color: #191919; font-size: 18px; font-weight: 400"
            >Brand</span
          >:
          <span style="color: #191919; font-size: 18px; font-weight: 300"
            >LG</span
          >
        </p>
        <p>
          <span style="color: #191919; font-size: 18px; font-weight: 400"
            >Model</span
          >:
          <span style="color: #191919; font-size: 18px; font-weight: 300"
            >OLED42C2PSA</span
          >
        </p>
        <p>
          <span style="color: #191919; font-size: 18px; font-weight: 400"
            >Availability</span
          >:
          <span style="color: #191919; font-size: 18px; font-weight: 300"
            >Only 2 in Stock</span
          >
        </p>
      </div>
      <p
        style="
          color: #191919;
          text-transform: uppercase;
          font-size: 32px;
          font-weight: 500;
        "
      >
        LG C2 42 (106cm) 4K Smart OLED <br />evo TV | WebOS | Cinema HDR
      </p>
      <div>
        <b-form-rating style="color: #e73c17" v-model="value"></b-form-rating>
      </div>
      <ul style="padding: 0 10px">
        <li
          style="
            color: #191919;
            font-size: 16px;
            font-weight: 300;
            margin: 10px;
          "
        >
          α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling
        </li>
        <li
          style="
            color: #191919;
            font-size: 16px;
            font-weight: 300;
            margin: 10px;
          "
        >
          Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
        </li>
        <li
          style="
            color: #191919;
            font-size: 16px;
            font-weight: 300;
            margin: 10px;
          "
        >
          Hands-free Voice Control, Always Ready
        </li>
        <li
          style="
            color: #191919;
            font-size: 16px;
            font-weight: 300;
            margin: 10px;
          "
        >
          Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
        </li>
        <li
          style="
            color: #191919;
            font-size: 16px;
            font-weight: 300;
            margin: 10px;
          "
        >
          Eye Comfort Display: Low-Blue Light, Flicker-Free
        </li>
      </ul>
      <div
        style="
          background-color: #f0f0f0;
          height: 1px;
          width: 70%;
          margin: 50px 0;
        "
      ></div>
      <div class="size-grid">
        <button
          v-for="size in sizes"
          :key="size.cm"
          :class="{ selected: size.isSelected }"
          @click="selectSize(size)"
        >
          {{ size.cm }} cm ({{ size.inch }})
        </button>
      </div>
      <div
        style="
          background-color: #f0f0f0;
          height: 1px;
          width: 70%;
          margin-top: 50px;
        "
      ></div>
      <div>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 50%;
          "
        >
          <div>
            <p style="color: #191919; font-size: 16px; font-weight: 400">
              USD(incl. of all taxes)
            </p>
            <p>
              <span style="color: #191919; font-size: 32px; font-weight: 400"
                >$600.72</span
              >
              <span
                style="
                  color: #d9d9d9;
                  font-size: 24px;
                  font-weight: 400;
                  text-decoration: line-through;
                  margin: 0 10px;
                "
                >$800.00</span
              >
            </p>
          </div>
          <div class="quantity-selector">
            <button @click="decrement" class="decrement">
              <img src="../../assets/icons/Minus.svg" alt="" />
            </button>
            <input
              type="text"
              v-model="quantity"
              readonly
              class="quantity-input"
            />
            <button @click="increment" class="increment">
              <img src="../../assets/icons/Plus.svg" alt="" />
            </button>
          </div>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 50%;
          "
        >
          <button style="background-color: #e73c17; color: white; width: 150px">
            Buy Now
          </button>
          <button
            style="
              border: 1px solid #e73c17;
              background-color: white;
              width: 150px;
            "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
      sizes: [
        { cm: 106, inch: 42, isSelected: true },
        { cm: 121, inch: 48, isSelected: false },
        { cm: 139, inch: 55, isSelected: false },
        { cm: 164, inch: 65, isSelected: false },
        { cm: 196, inch: 77, isSelected: false },
        { cm: 210, inch: 83, isSelected: false },
      ],
      quantity: 1,
    };
  },
  methods: {
    selectSize(selectedSize) {
      this.sizes.forEach((size) => {
        size.isSelected = size.cm === selectedSize.cm;
      });
    },
    increment() {
      this.quantity += 1;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
  },
  computed: {
    selectedStyle() {
      return {
        border: "1px solid #e73c17",
        padding: "20px",
        margin: "0 15px 15px 0",
        backgroundColor: "#fff",
      };
    },
    unselectedStyle() {
      return {
        border: "1px solid #f0f0f0",
        padding: "20px",
        margin: "0 15px 15px 0",
        backgroundColor: "#f1f1f1",
      };
    },
  },
};
</script>

<style scoped>
.size-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 50%;
  /* Adjust gap between items */
}

button {
  padding: 20px;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  background-color: white;
}

button.selected {
  border-color: #e73c17;
  background-color: white;
}

.quantity-selector {
  display: flex;
  border: 1px solid #f0f0f0;
}

.decrement,
.increment {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quantity-input {
  width: 30px;
  height: auto;
  text-align: center;
  border: none;
  outline: none;
  font-size: 32px;
  font-weight: 400;
  display: flex;
  align-content: center;
  justify-content: center;
}

/* You may want to add media queries if you need responsiveness */
@media (max-width: 600px) {
  .size-grid {
    grid-template-columns: repeat(2, 1fr);
    /* Adjust for smaller screens */
  }
}
</style>
