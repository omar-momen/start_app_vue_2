<template>
  <form @submit.prevent="validate"></form>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      // ========== BtnLoading
      btn_loading: false,

      data: {
        new_password: null,
        confirm_password: null,
        remember_me: false,
      },
    };
  },

  computed: {
    ...mapState({
      email: (state) => state.auth_module.email,
      code: (state) => state.auth_module.verify_code,
    }),
  },

  methods: {
    validate() {
      if (this.data.new_password != this.data.confirm_password) {
        this.$iziToast.error({
          title: this.$t("form.error"),
          message: this.$t("form.password_not_match"),
        });
      } else {
        this.submit();
      }
    },

    submit() {
      if (!this.email || !this.code) {
        this.$router.push("/authentication/forget-password");
        this.$iziToast.success({
          title: this.$t("form.error"),
          message: this.$t("form.resendEmail"),
        });
        return;
      }
      this.btn_loading = true;

      const data = new FormData();
      data.append("password", this.data.new_password);
      data.append("email", this.email);
      data.append("code", this.code);

      this.$axios({
        method: "POST",
        url: "reset_password",
        data: data,
      })
        .then((res) => {
          this.$iziToast.success({
            title: this.$t("form.success"),
            message: this.$t("form.resetPasswordSuccess"),
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
