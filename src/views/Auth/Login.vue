<template>
  <form class="auth" @submit.prevent="submit"></form>
</template>

<script>
export default {
  data() {
    return {
      // ========== BtnLoading
      btn_loading: false,

      data: {
        email: null,
        password: null,
        rememberMe: false,
      },
    };
  },
  methods: {
    submit() {
      this.btn_loading = true;

      const data = new FormData();
      data.append("username", this.data.email);
      data.append("password", this.data.password);
      data.append("rememberMe", this.data.rememberMe);

      this.$axios({
        method: "POST",
        url: "login",
        data: data,
      })
        .then((res) => {
          this.$iziToast.success({
            title: this.$t("form.success"),
            message: this.$t("form.loginSuccess"),
          });

          let user = {
            userId: res.data.data.id,
            token: res.data.data.token,
            userType: res.data.data.user_type,
            userName: res.data.data.first_name + " " + res.data.data.last_name,
            userImage: res.data.data.image,
            userPhone: res.data.data.phone,
          };
          this.$store.dispatch("auth_module/logIn", user);
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
