<template>
  <div class="aboutUsPage" v-if="aboutData">About Page</div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      // ========== Breadcrumbs
      items: [
        {
          text: this.$t("breadcrumb.mainPage"),
          disabled: false,
          href: "/",
        },
        {
          text: this.$t(`breadcrumb.aboutPage`),
          disabled: true,
          href: "",
        },
      ],

      aboutData: null,
    };
  },

  methods: {
    getData() {
      this.$axios({
        method: "GET",
        url: "about",
      })
        .then((res) => {
          this.aboutData = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    // this.getData();
  },
};
</script>

<style lang="scss" scoped></style>
