<template>
  <div class="wrapper" :class="[align, headingStyle]">
    <div class="heading">
      <h2 :style="{ color: mainTextColor }">{{ mainText }}</h2>
      <div class="background" :style="{ color: backgroundColor }">
        {{ backgroundText }}
      </div>
    </div>

    <img
      v-if="tale && taleType == 'light'"
      src="@/assets/media/images/others/headingTale.png"
      class="tale"
    />

    <img
      v-if="tale && taleType == 'dark'"
      src="@/assets/media/images/others/headingTale_dark.png"
      class="tale"
    />

    <img
      v-if="tale && taleType == 'small'"
      src="@/assets/media/images/others/headingTale_small.png"
      class="tale"
    />
  </div>
</template>

<script>
export default {
  props: {
    taleType: {
      type: String,
      default: "light",
    },
    align: {
      type: String,
      default: "center",
    },
    mainText: {
      type: String,
      required: true,
      default: "LUSTER",
    },
    mainTextColor: {
      type: String,
      required: false,
      default: "#333",
    },
    backgroundText: {
      type: String,
      default: "LUSTER",
    },
    backgroundColor: {
      type: String,
      required: false,
      default: "#8787870f",
    },
    headingStyle: {
      type: String,
      required: false,
      default: "small",
    },
    tale: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: fit-content;
  margin-block: 30px;

  &.center {
    margin-inline: auto;
  }
  &.start {
    margin-inline-end: auto;
  }
  &.end {
    margin-inline-start: auto;
  }

  .heading {
    height: 50px;
    position: relative;
  }

  &.small {
    h2 {
      font-size: 30px;
      font-weight: bold;
      position: relative;
      top: 0;
      left: 0;
      z-index: 2;
    }

    .background {
      font-size: 30px;
      font-weight: bold;
      position: absolute;
      left: 0;
      top: -70%;
      transform: scale(2);
      z-index: 1;
    }
  }

  &.big {
    h2 {
      font-size: 30px;
      font-weight: bold;
      position: relative;
      top: 0;
      left: 0;
      z-index: 2;
    }

    .background {
      font-size: 40px;
      font-weight: bold;
      position: absolute;
      left: 100px;
      top: -100%;
      transform: scale(2);
      z-index: 1;
    }
  }

  &.verySmall {
    margin-bottom: 30px;

    .heading {
      height: auto;
    }

    h2 {
      font-size: 18px;
      font-weight: normal;
      margin: 10px 0;
    }

    .background {
      display: none;
    }

    .tale {
      height: auto;
      display: block;
      margin: 0;
    }
  }

  .tale {
    margin-inline-end: auto;
    height: 15px;
    margin-top: -32px;
  }
}

body.rtl {
  .wrapper {
    &.small {
      .background {
        right: 0;
        left: unset;
      }
    }

    &.big {
      .background {
        right: 100px;
        left: unset;
      }
    }
  }
}
</style>
