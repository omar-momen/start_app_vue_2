<template>
  <form class="noBorder" @submit.prevent="submit">
    <div class="inputs">
      <base-input length="4" type="otb" v-model="data.code"></base-input>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      // ========== BtnLoading
      btn_loading: false,

      comeFrom: "",

      data: {
        code: null,
      },
    };
  },

  computed: {
    ...mapState({
      email: (state) => state.auth_module.email,
    }),
  },

  methods: {
    submit() {
      if (!this.email) {
        this.$router.push("/authentication/forget-password");
        this.$iziToast.success({
          title: this.$t("form.error"),
          message: this.$t("form.resendEmail"),
        });
        return;
      }

      this.btn_loading = true;

      const data = new FormData();
      data.append("email", this.email);
      data.append("code", this.data.code);

      this.$axios({
        method: "POST",
        url: "check_code",
        data: data,
      })
        .then((res) => {
          console.log(res);
          this.$iziToast.success({
            title: this.$t("form.success"),
            message: this.$t("form.resetPassword"),
          });

          this.$router.push("/authentication/reset-password");
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

    resendCode() {
      console.log("resend code");
    },
  },
};
</script>

<style lang="scss" scoped></style>
