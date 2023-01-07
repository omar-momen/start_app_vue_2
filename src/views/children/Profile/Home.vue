<template>
  <div class="profilePage" v-if="profileData">Profile Page</div>
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
          text: this.$t(`breadcrumb.profilePage`),
          disabled: true,
          href: "",
        },
      ],

      profileData: null,
    };
  },

  methods: {
    getData() {
      this.$axios({
        method: "GET",
        url: "profile",
      })
        .then((res) => {
          this.profileData = res.data.data;
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
