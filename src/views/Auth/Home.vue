<template>
  <div class="authPage">
    <!-- ============== Logo -->
    <div class="logo">
      <router-link to="/"
        ><img src="@/assets/media/images/logo/logo_light.svg" alt="mainLogo"
      /></router-link>
    </div>

    <div class="authForm">
      <transition name="fadeInUp" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      currentTabComponent: "login",
    };
  },

  methods: {
    ...mapActions({
      login: "auth_module/logIn",
    }),

    signIn() {
      this.login({
        userId: "5",
        token: "dsavdsvdsvdsvdsdsv",
        userType: "omarType",
        userImage: "https://",
        userPhone: "01009867150",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
