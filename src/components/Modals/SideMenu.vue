<template>
  <transition name="fadeIn">
    <div v-if="show" @click.stop="closeMenu" class="menu_container">
      <transition name="slide">
        <main
          @click.stop
          class="main_body sideMenu"
          :class="{ left: direction == 'left', right: direction == 'right' }"
        >
          <span @click.stop="closeMenu" class="close"
            ><i class="fas fa-times"></i
          ></span>
          <slot></slot>
        </main>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Model",

  props: {
    show: {
      type: Boolean,
      required: true,
    },
    direction: {
      type: String,
      required: false,
      default: "left",
    },
  },

  emits: ["closeMenu"],

  methods: {
    closeMenu() {
      this.$emit("closeMenu");
    },
  },

  created() {
    document.querySelector("body").classList.add("noScroll");
  },
  beforeDestroy() {
    document.querySelector("body").classList.remove("noScroll");
  },
};
</script>

<style lang="scss" scoped>
@keyframes sideMenueLeft {
  100% {
    left: 0;
  }
}

@keyframes sideMenueRight {
  100% {
    right: 0;
  }
}
.menu_container {
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  min-height: 100vh;
  overflow-y: scroll;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background: #222222d2;

  .main_body:not(.insideMenu) {
    padding-top: 50px;
    overflow: hidden;
    width: 400px;
    position: absolute;
    top: 0;
    background: #fff;
    height: 100%;
    overflow-y: scroll;
    transition: all 0.2s linear;

    &.left {
      left: -100%; // RTL
      animation: sideMenueLeft 0.4s linear forwards;

      .close {
        left: 20px;
      }
    }
    &.right {
      right: -100%; // RTL
      animation: sideMenueRight 0.4s linear forwards;
      .close {
        right: 20px;
      }
    }

    @media (max-width: 400px) {
      width: 100%;
    }

    .close {
      position: absolute;
      top: 20px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--main);
      border-radius: 50%;
      z-index: 99;

      &.chat_icon {
        background: #fff;
      }

      i {
        color: #fff;
        font-size: 20px;
      }
    }
  }
}

body.rtl {
  .menu_container {
    .main_body:not(.insideMenu) {
      &.left {
        left: unset !important;
        right: -100%;
        animation: sideMenueRight 0.4s linear forwards;

        .close {
          left: unset !important;
          right: 20px;
        }
      }

      &.right {
        right: unset !important;
        left: -100%;
        animation: sideMenueLeft 0.4s linear forwards;
        .close {
          right: unset !important;
          left: 20px;
        }
      }
    }
  }
}
</style>
