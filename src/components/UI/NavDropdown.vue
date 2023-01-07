<template>
  <transition name="fadeIn">
    <div class="nav_dropDown" v-if="show">
      <main>
        <slot></slot>
      </main>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["show", "items"],

  methods: {},

  created() {
    window.addEventListener("click", () => {
      this.$emit("close");
    });
  },
};
</script>

<style lang="scss">
.nav_dropDown {
  position: absolute;
  z-index: 999;
  top: 130%;
  right: -20px; // RTL
  border: 1px solid #dcdcdc;
  box-shadow: -1px -2px 10px 0px #eeeeee;
  background: #fff;
  border-radius: 10px;

  main {
    max-height: 500px;
    overflow-y: scroll;
  }

  &::before {
    content: "";
    border-width: 12px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    top: -24px;
    right: 20px; // RTL
  }

  @media (max-width: 800px) {
    width: 95%;
    right: 50%;
    transform: translateX(50%);
    top: 110%;

    &::before {
      display: none;
    }

    main {
      & > * {
        width: 100% !important;
      }
    }
  }
}

body.rtl {
  .nav_dropDown {
    right: unset;
    left: -20px;

    &::before {
      right: unset;
      left: 20px;
    }
  }
}
</style>
