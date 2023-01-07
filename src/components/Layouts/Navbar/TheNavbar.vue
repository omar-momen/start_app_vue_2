<template>
  <nav class="theNav" :class="{ stikyNav: stikyNav, inView: inView }">
    <div class="container">
      <!-- ============== Logo -->
      <div class="logo">
        <router-link to="/"><img :src="logo" alt="mainLogo" /></router-link>
      </div>

      <!-- ============== Links -->
      <links-menu :links="links"></links-menu>

      <!-- ============== Actions -->
      <div class="actions">
        <!-- ** Search -->
        <search-menu url="/lol"></search-menu>

        <!-- ** notification -->
        <notification-menu v-if="user.token" url="/lol"></notification-menu>

        <!-- ** Language -->
        <switch-language></switch-language>

        <div @click="changeTheme">
          <base-button>change_theme</base-button>
        </div>

        <!-- ** User -->
        <user-menu v-if="user.token"></user-menu>

        <!-- ** Login -->
        <base-button v-else link to="/authentication/login">{{
          $t("form.login")
        }}</base-button>
      </div>

      <!-- ============== ToggleMenu -->
      <toggle-links-menu :links="links"></toggle-links-menu>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import NotificationMenu from "./NotificationMenu.vue";
import SwitchLanguage from "./SwitchLanguage.vue";
import SearchMenu from "./SearchMenu.vue";
import ToggleLinksMenu from "./ToggleLinksMenu.vue";
import LinksMenu from "./LinksMenu.vue";
import UserMenu from "./UserMenu.vue";

export default {
  components: {
    NotificationMenu,
    SwitchLanguage,
    SearchMenu,
    ToggleLinksMenu,
    LinksMenu,
    UserMenu,
  },

  data() {
    return {
      links: [
        {
          title: this.$t("navbar.home"),
          path: "/",
        },
        {
          title: this.$t("navbar.aboutUs"),
          path: "/about-us",
        },
        {
          title: this.$t("navbar.contactUs"),
          path: "/contact-us",
        },
      ],

      stikyNav: false,
      inView: false,
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

  methods: {
    ...mapActions({
      changeTheme: "theme_module/changeTheme",
    }),
  },

  mounted() {
    const BODY = document.querySelector("body");
    const NAV_HEIGHT = document.querySelector(".theNav").clientHeight;

    window.addEventListener("scroll", () => {
      let documentScrollTop = document.documentElement.scrollTop;

      if (documentScrollTop > NAV_HEIGHT * 6) {
        BODY.style.paddingTop = NAV_HEIGHT + "px";
      } else {
        BODY.style.paddingTop = 0;
      }

      this.stikyNav = documentScrollTop > NAV_HEIGHT * 6;
      this.inView = documentScrollTop > 8 * NAV_HEIGHT;
    });
  },
};
</script>

<style lang="scss" scoped>
.theNav {
  background: var(--main_bg);
  position: relative;
  top: 0;
  padding: 5px 0;
  transition: all 0.3s linear;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    // LOGO
    .logo {
      img {
        height: 70px;
      }
    }

    // Actions
    .actions {
      display: flex;
      justify-content: center;
      align-content: center;

      .user {
        cursor: pointer;
        height: 35px;
        border-radius: 50%;

        & > img {
          height: 100%;
          border-radius: 50%;
        }

        @media (max-width: 992px) {
          height: 30px;
        }
      }

      & > * {
        margin: 0 10px;

        @media (max-width: 500px) {
          margin: 0 10px;
        }
      }
    }

    // ToggleMenu
    .toggleMenu {
      display: block;
      margin-top: 8px;
      margin-inline-start: 13px;
      cursor: pointer;

      i {
        font-size: 25px;
      }

      @media (min-width: 992px) {
        display: none;
      }
    }
  }

  &.stikyNav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    border-bottom: 1.5px solid var(--inputBorder);
    box-shadow: 0 0 10px var(--mainShadow);
    transform: translate(0, -200px);
  }
  &.inView {
    transform: translate(0, 0);
  }

  @media (max-width: 992px) {
    padding-top: 15px;

    .container {
      justify-content: center;

      .logo {
        margin-inline-end: auto;
        img {
          height: 50px;
        }
      }

      ul.links {
        display: none;
      }

      .actions {
        & > a,
        .language {
          display: none;
        }
      }
    }
  }
}
</style>
