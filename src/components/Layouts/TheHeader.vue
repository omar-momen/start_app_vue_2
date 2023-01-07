<template>
  <section class="homeSection theHeader">
    <v-row>
      <v-col
        cols="12"
        lg="6"
        class="col"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div class="slider">
          <ul class="myDots">
            <li
              class="dot"
              :class="{ active: currentIndex == index }"
              v-for="(dot, index) in data.slider"
              :key="dot.id"
            >
              <span class="line"></span>
              <span class="text" @click="goTo(index)">0{{ index + 1 }}</span>
            </li>
          </ul>

          <vue-slick
            ref="carousel"
            v-bind="slideSettings"
            @afterChange="afterChange"
          >
            <div
              v-for="slide in data.slider"
              :key="slide.id"
              class="mySlide"
              :dir="lang == 'ar' ? 'rtl' : 'ltr'"
            >
              <h1 class="h_1">{{ slide.name }}</h1>
              <h1 class="h_2">{{ slide.sub_name }}</h1>
              <p class="para">
                {{ slide.desc }}
              </p>

              <base-button v-if="user.token" link to="/booking/add">{{
                $t("header.getBooking")
              }}</base-button>
              <base-button
                v-else
                class="colored"
                link
                to="/authentication/login"
                >{{ $t("header.getStart") }}</base-button
              >
            </div>
          </vue-slick>
        </div>
      </v-col>

      <v-col
        cols="12"
        lg="6"
        class="col"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div class="homeImage">
          <img :src="data.main_image" @error="imageLoadOnError" />
        </div>
      </v-col>
    </v-row>

    <scroll-down @clicked="scrollToAbout"></scroll-down>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ScrollDown from "../UI/ScrollDown.vue";

export default {
  props: ["data"],

  components: { ScrollDown },
  data() {
    return {
      defaultImg: require("@/assets/media/images/others/homeCar.png"),

      slideSettings: {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      },
      slides: [1, 2, 3],
      currentIndex: 0,
    };
  },

  computed: {
    ...mapGetters({
      lang: "lang_module/lang",
      user: "auth_module/currentUser",
    }),
  },

  methods: {
    imageLoadOnError(e) {
      e.target.setAttribute("src", this.defaultImg);
    },

    goTo(index) {
      this.$refs.carousel.goTo(index);
    },

    afterChange(index) {
      this.currentIndex = index;
    },

    scrollToAbout() {
      const el = document.querySelector("#aboutSection");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss">
.theHeader {
  height: calc(100vh - 100px);
  position: relative;

  .row {
    height: inherit;
    & > * {
      height: inherit;
      & > * {
        height: inherit;
      }
    }

    @media (max-width: 1250px) {
      & > .col:first-child {
        width: 100% !important;
      }
      & > .col:last-child {
        display: none;
      }
    }

    .slider {
      position: relative;
      width: 75%;
      margin: 0 auto;

      @media (max-width: 700px) {
        width: 95%;
      }

      .slick-slide {
        & > div {
          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: 700px) {
            text-align: center;
          }
        }
      }

      .myDots {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -165px; // RTL
        z-index: 555;
        transform: rotate(270deg);
        width: 250px;
        display: flex;
        align-items: center;
        .dot {
          display: flex;
          align-items: center;
          color: #cecece;
          font-size: 20px;
          transition: all 0.2s linear;

          &.active {
            color: #333;
            span.line {
              background: #333;
            }
          }

          span.line {
            transition: all 0.2s linear;
            display: block;
            width: 50px;
            height: 3px;
            background: #cecece;
            margin-inline-end: 8px;
            pointer-events: none;
          }

          span.text {
            display: block;
            margin-inline-end: 8px;
            cursor: pointer;
          }
        }

        @media (max-width: 700px) {
          display: none;
        }
      }
    }

    .homeImage {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  @media (max-width: 992px) {
    .scroll_down {
      display: none;
    }
  }
}

body.rtl {
  .theHeader {
    .row {
      .slider {
        .myDots {
          left: unset;
          right: -165px;
        }
      }
    }
  }
}
</style>
