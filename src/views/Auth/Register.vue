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
        image: null,
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        password: null,
        password_confirmation: null,
      },
    };
  },

  methods: {
    imageUploded(obj) {
      this.data.image = obj;
    },

    submit() {
      this.btn_loading = true;

      const data = new FormData();
      data.append("image", this.data.image?.img_file);
      data.append("first_name", this.data.first_name);
      data.append("last_name", this.data.last_name);
      data.append("email", this.data.email);
      data.append("password_confirmation", this.data.password_confirmation);
      data.append("password", this.data.password);
      data.append("phone", this.data.phone);

      this.$axios({
        method: "POST",
        url: "register",
        data: data,
      })
        .then((res) => {
          console.log(res);
          this.$iziToast.success({
            title: this.$t("form.success"),
            message: this.$t("form.signupSuccess"),
          });
          this.$router.push("/authentication/login");
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
