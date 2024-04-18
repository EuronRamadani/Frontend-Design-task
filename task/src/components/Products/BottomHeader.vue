<template>
  <div style="display: flex; height: 76px">
    <div
      style="
        background-color: #e73c17;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 40%;
        padding: 0 70px;
      "
    >
      <img
        style="width: 30px"
        src="../../assets/icons/categoryIcon.svg"
        alt=""
      />
      <p
        style="
          background-color: #e73c17;
          color: #ffffff;
          font-size: 24px;
          font-weight: 500;
        "
      >
        All Categories
      </p>
      <img src="../../assets/icons/arrowDown.svg" alt="" />
    </div>
    <div
      style="
        display: flex;
        background-color: #2f333a;
        align-items: center;
        justify-content: center;
        width: 100%;
      "
    >
      <div
        style="
          display: flex;
          margin: 20px;
          justify-content: center;
          align-items: center;
        "
      >
        <p
          style="
            color: #ffffff;
            font-size: 16px;
            font-weight: 400;
            margin: 0 5px;
            text-transform: uppercase;
          "
        >
          Home
        </p>
        <img src="../../assets/icons/arrowDown.svg" alt="" />
      </div>
      <div
        style="
          display: flex;
          margin: 20px;
          justify-content: center;
          align-items: center;
        "
      >
        <p
          style="
            color: #ffffff;
            font-size: 16px;
            font-weight: 400;
            margin: 0 5px;
            text-transform: uppercase;
          "
        >
          About
        </p>
        <img src="../../assets/icons/arrowDown.svg" alt="" />
      </div>
      <div
        style="
          display: flex;
          margin: 20px;
          justify-content: center;
          align-items: center;
        "
      >
        <p
          style="
            color: rgb(231, 60, 23);
            font-size: 16px;
            font-weight: 400;
            margin: 0 5px;
            text-transform: uppercase;
          "
        >
          Product
        </p>
        <img
          style="color: rgb(231, 60, 23)"
          src="../../assets/icons/arrowDown2.svg"
          alt=""
        />
      </div>
      <div
        style="
          display: flex;
          margin: 20px;
          justify-content: center;
          align-items: center;
        "
      >
        <p
          style="
            color: #ffffff;
            font-size: 16px;
            font-weight: 400;
            margin: 0 5px;
            text-transform: uppercase;
          "
        >
          Pages
        </p>
        <img src="../../assets/icons/arrowDown.svg" alt="" />
      </div>
      <div
        style="
          display: flex;
          margin: 20px;
          justify-content: center;
          align-items: center;
        "
      >
        <p
          style="
            color: #ffffff;
            font-size: 16px;
            font-weight: 400;
            margin: 0 5px;
            text-transform: uppercase;
          "
        >
          Contact
        </p>
        <img src="../../assets/icons/arrowDown.svg" alt="" />
      </div>
    </div>
    <div
      style="
        display: flex;
        background-color: #2f333a;
        align-items: center;
        justify-content: center;
        border-left: 1px solid #f0f0f0;
        padding-left: 20px;
        width: 40%;
      "
    >
      <img
        style="width: 40px; margin: 0 20px"
        src="../../assets//icons/headset.svg"
        alt=""
      />
      <p style="color: white">
        <span
          style="
            color: #ffffff;
            font-size: 15px;
            font-weight: 300;
            text-transform: uppercase;
          "
        >
          contact us 24/7</span
        >
        <br />
        <span
          style="
            color: #ffffff;
            font-size: 18px;
            font-weight: 500;
            margin-top: 5px;
          "
          >+12012987481</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  font-size: 20px;
  width: 200px;
}

.dropdown-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 300;
  color: #191919;
}

.dropdown-select {
  width: 100%;
  padding: 0.5rem;
  border: 0;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 300;
  color: white;
  -webkit-appearance: none; /* Removes default chrome and safari style */
  -moz-appearance: none; /* Removes default style Firefox */
  appearance: none; /* Removes default browser style*/
  background-color: #2f333a;
  position: relative;
}

.dropdown-select:focus {
  outline: none;
  border-color: #191919;
}

.dropdown::after {
  content: "\25BC";
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  pointer-events: none;
  // color: #191919;
}
</style>
