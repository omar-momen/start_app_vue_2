<template>
  <form @submit.prevent="submit"></form>
</template>

<script>
export default {
  data() {
    return {
      // ========== BtnLoading
      btn_loading: false,

      data: {
        email: null,
      },
    };
  },
  methods: {
    submit() {
      this.btn_loading = true;

      const data = new FormData();
      data.append("email", this.data.email);

      this.$axios({
        method: "POST",
        url: "send_code",
        data: data,
      })
        .then((res) => {
          this.$iziToast.success({
            title: this.$t("form.success"),
            message: this.$t("form.verifyNow"),
          });
          this.$store.commit("auth_module/save_verify_data", {
            email: this.data.email,
            code: res.data.dev_message,
          });
          this.$router.push("/authentication/verification-code");
        })
        .catch((err) => {
          console.log(err);
          this.$iziToast.error({
            title: this.$t("form.error"),
            message: err.response.data.message,
          });
        })
        .finally(() => {
          this.btn_loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
