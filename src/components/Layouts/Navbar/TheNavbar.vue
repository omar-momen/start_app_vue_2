<template>
  <nav
    class="theNav custom_card"
    :class="{ stikyNav: stikyNav, inView: inView }"
  >
    <div class="logo_links_side">
      <!-- ============== Logo -->
      <div class="logo">
        <router-link to="/"><img :src="logo" alt="mainLogo" /></router-link>
      </div>

      <!-- ============== Links -->
      <links-menu :links="links"></links-menu>
    </div>

    <div class="actions_side">
      <!-- ============== Actions -->
      <div class="actions">
        <!-- ** Search -->
        <search-menu url="/lol"></search-menu>

        <!-- ** notification -->
        <notification-menu v-if="user.token" url="/lol"></notification-menu>

        <div class="change_theme" @click="changeTheme">
          <i class="fal fa-sun"></i>
        </div>

        <!-- ** User -->
        <user-menu v-if="user.token"></user-menu>

        <!-- ** Login -->
        <base-button v-else link to="/authentication/login">{{
          $t("form.login")
        }}</base-button>

        <!-- ** Language -->
        <switch-language></switch-language>
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
          title: this.$t("navbar.stories"),
          path: "/stories",
        },
        {
          title: this.$t("navbar.offers"),
          path: "/offers",
        },
        {
          title: this.$t("navbar.favorite"),
          path: "/favorite",
        },
        {
          title: this.$t("navbar.wallet"),
          path: "/wallet",
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

<style lang="scss">
.theNav {
  position: relative;
  top: 0;
  transition: all 0.3s linear;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 15px 10px;

  .logo_links_side {
    display: flex;
    align-items: center;

    // LOGO
    .logo {
      a {
        height: 56px;
        display: block;

        img {
          height: inherit;
        }
      }
    }
  }

  .actions_side {
    margin-inline-start: auto;
    display: flex;
    align-items: center;

    // Actions
    .actions {
      display: flex;
      justify-content: center;
      align-content: center;

      i {
        font-size: 25px;
        transition: all 0.2s linear;
        cursor: pointer;

        &:hover {
          color: var(--app_color);
        }
      }

      .change_theme {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #db8900;
      }

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

    .logo_links_side {
      .logo {
        margin-inline-end: auto;
        img {
          height: 50px;
        }
      }

      ul.links {
        display: none;
      }
    }

    .actions_side {
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
