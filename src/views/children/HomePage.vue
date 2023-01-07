<template>
  <div class="homePage" v-if="homeData">HomePage</div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      homeData: null,
    };
  },

  methods: {
    getData() {
      this.$axios({
        method: "GET",
        url: "home",
      })
        .then((res) => {
          this.homeData = res.data.data;
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
