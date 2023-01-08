<template>
  <div class="toggleMenu" @click="show = !show">
    <i class="fad fa-bars"></i>

    <side-menu v-if="show" :show="show" @closeMenu="show = false">
      <!-- ** Logo-->
      <div class="logo">
        <router-link to="/"><img :src="logo" alt="mainLogo" /></router-link>
      </div>

      <links-menu
        @linkClicked="show = false"
        :links="links"
        class="smallScreen"
      ></links-menu>

      <div class="actions_side">
        <!-- ** Language -->
        <switch-language class="smallScreen"></switch-language>

        <!-- ** Login -->
        <base-button v-if="!user.token" link to="/authentication/login">{{
          $t("form.login")
        }}</base-button>
      </div>
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
      theme: "theme_module/current_theme",
    }),

    logo() {
      if (this.theme == "light") {
        return require("@/assets/media/images/logo/logo_light.svg");
      } else {
        return require("@/assets/media/images/logo/logo_dark.svg");
      }
    },
  },
};
</script>

<style lang="scss">
.theNav {
  .toggleMenu {
    .logo {
      img {
        height: 100px !important;
        margin: 15px auto;
        display: block;
      }
    }

    ul.links.smallScreen {
      display: block;
      flex-direction: column;
      padding: 10px;

      li.link {
        margin: 10px auto;
        width: fit-content;
      }
    }

    .actions_side {
      display: flex;
      flex-direction: column;

      .language {
        margin: 25px 0;
        width: fit-content;
      }
    }
  }
}
</style>
