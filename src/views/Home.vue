<template>
  <div>
    <the-navbar></the-navbar>
    <transition name="fadeInUp" mode="out-in">
      <MainGif v-if="loading" />
      <router-view v-else></router-view>
    </transition>
    <the-footer></the-footer>
    <transition name="fadeIn">
      <scroll-up-page v-if="scrollToTop" />
    </transition>
  </div>
</template>

<script>
import TheNavbar from "../components/Layouts/Navbar/TheNavbar.vue";
import TheFooter from "../components/Layouts/TheFooter.vue";

import scrollUpPage from "../components/Layouts/scrollUpPage.vue";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: { TheNavbar, TheFooter, scrollUpPage },

  data() {
    return {
      scrollToTop: false,
    };
  },

  computed: {
    ...mapGetters({
      loading: ["global_loading"],
    }),
  },

  created() {
    window.addEventListener("scroll", () => {
      let documentScrollTop = document.documentElement.scrollTop;
      this.scrollToTop = documentScrollTop > 1000;
    });
  },
};
</script>
