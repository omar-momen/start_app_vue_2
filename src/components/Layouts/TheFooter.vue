<template>
  <footer class="theFooter custom_card">
    <div class="copyRight">Copyright © {{ new Date().getFullYear() }} O_M</div>

    <ul class="links">
      <li
        @click="$emit('linkClicked')"
        class="link"
        v-for="link in links"
        :key="link.id"
      >
        <template v-if="link.path">
          <router-link :to="link.path">
            <span class="text">{{ link.title }}</span>
          </router-link>
        </template>

        <template v-else>
          <button @click="helper_scrollToElement(link.sectionId)">
            <span class="text">{{ link.title }}</span>
          </button>
        </template>
      </li>
    </ul>

    <div class="socials">
      <a href="">
        <span
          class="social facebook"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <i class="fab fa-facebook-f"></i>
        </span>
      </a>
      <a href="">
        <span
          class="social twitter"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <i class="fab fa-twitter"></i>
        </span>
      </a>
      <a href="">
        <span
          class="social linkedin"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          <i class="fab fa-linkedin"></i>
        </span>
      </a>
      <a href="">
        <span
          class="social instagram"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <i class="fab fa-instagram"></i>
        </span>
      </a>
    </div>

    <!-- <div class="socials">
      <a :href="footerData.facebook">
        <span
          class="social facebook"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <i class="fab fa-facebook-f"></i>
        </span>
      </a>
      <a :href="footerData.twitter">
        <span
          class="social twitter"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <i class="fab fa-twitter"></i>
        </span>
      </a>
      <a :href="footerData.linked_in">
        <span
          class="social linkedin"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          <i class="fab fa-linkedin"></i>
        </span>
      </a>
      <a :href="footerData.instagram">
        <span
          class="social instagram"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <i class="fab fa-instagram"></i>
        </span>
      </a>
    </div> -->
  </footer>
</template>

<script>
export default {
  props: ["footerData"],

  data() {
    return {
      links: [
        {
          title: this.$t("footer.aboutUs"),
          sectionId: "#aboutUs",
        },
        {
          title: this.$t("footer.terms"),
          path: "/terms",
        },
        {
          title: this.$t("footer.policy"),
          path: "/policy",
        },
        {
          title: this.$t("footer.services"),
          path: "/services",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
footer.theFooter {
  margin: 30px 0 20px;
  border-radius: 15px;
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1070px) {
    flex-direction: column;

    .copyRight {
      margin-top: 10px;
    }

    .links {
      margin-block: 20px;
      flex-direction: column;

      .link {
        margin-block: 4px;
        &::after {
          display: none !important;
        }
      }
    }
  }

  .copyRight {
    font-size: 13px;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;

    .link {
      font-size: 15px;
      margin-inline: 30px;

      &:not(:last-child) {
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 5px;
          height: 5px;
          background: var(--main);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -30px;
        }
      }

      span {
        color: var(--main);
      }
    }
  }

  .socials {
    display: flex;
    .social {
      margin: 15px 10px;
      width: 30px;
      height: 30px;
      background: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: #fff;
      transition: all 0.4s ease-in-out;
      i {
        transition: all 0.4s ease-in-out;
        font-size: 15px;
      }
      &:hover {
        i {
          transform: rotate(360deg);
        }
        &.facebook {
          background: var(--facebook);
        }
        &.twitter {
          background: var(--twitter);
        }
        &.linkedin {
          background: var(--linkedin);
        }
        &.instagram {
          background: var(--instagram);
        }
      }
    }
  }
}
</style>
