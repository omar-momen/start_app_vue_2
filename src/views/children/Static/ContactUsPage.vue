<template>
  <div class="aboutUsPage" v-if="contactData">Contact Page</div>
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
          text: this.$t(`breadcrumb.contactPage`),
          disabled: true,
          href: "",
        },
      ],

      contactData: null,
    };
  },

  methods: {
    getData() {
      this.$axios({
        method: "GET",
        url: "contact",
      })
        .then((res) => {
          this.contactData = res.data.data;
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
