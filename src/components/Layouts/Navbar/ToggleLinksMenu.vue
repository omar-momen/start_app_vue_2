<template>
  <div class="toggleMenu" @click="show = !show">
    <i class="fad fa-bars"></i>

    <side-menu v-if="show" :show="show" @closeMenu="show = false">
      <!-- ** Logo-->
      <div class="logo">
        <router-link to="/"
          ><img
            class="mx-auto d-block"
            src="@/assets/media/images/logo/logo_light.svg"
            alt="mainLogo"
        /></router-link>
      </div>

      <links-menu
        @linkClicked="show = false"
        :links="links"
        class="smallScreen"
      ></links-menu>

      <!-- ** Language -->
      <switch-language class="mx-auto d-block"></switch-language>

      <!-- ** Login -->
      <base-button v-if="!user.token" link to="/login" class="block_center"
        >Login</base-button
      >
    </side-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import LinksMenu from "./LinksMenu.vue";
import SwitchLanguage from "./SwitchLanguage.vue";

export default {
  props: ["links"],

  components: { LinksMenu, SwitchLanguage },
  data() {
    return {
      show: false,
    };
  },

  computed: {
    ...mapGetters({
      user: "auth_module/currentUser",
    }),
  },
};
</script>

<style lang="scss">
.theNav .container {
  .logo {
    img {
      height: 100px;
    }
  }

  ul.links.smallScreen {
    display: block;
    flex-direction: column;
    padding: 30px 10px 20px;

    li.link {
      margin: 10px auto;
      width: fit-content;
    }
  }

  .language {
    width: fit-content;
  }
}
</style>
