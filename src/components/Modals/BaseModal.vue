<template>
  <transition name="fadeIn">
    <div v-if="show" class="baseModel" @click="$emit('close')">
      <main @click.stop :class="{ closeIcon: isSmallScreen || closeIcon }">
        <span
          v-if="isSmallScreen || closeIcon"
          @click.stop="$emit('close')"
          class="close"
          ><i class="fas fa-times"></i
        ></span>

        <slot></slot>
      </main>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["show", "closeIcon"],

  computed: {
    ...mapGetters({
      isSmallScreen: "dom_module/isSmallScreen",
    }),
  },
};
</script>

<style lang="scss" scoped>
.baseModel {
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 999;
  background: #333333d4;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    max-width: 95vw;
    max-height: 95vh;
    overflow-y: scroll;
    width: auto;
    height: auto;
    background: var(--main_bg);
    position: relative;
    border-radius: 15px;

    &.closeIcon {
      padding: 50px 40px;
    }

    .close {
      position: absolute;
      top: 15px;
      left: 15px; // RTL
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--main);
      border-radius: 50%;
      z-index: 99;

      i {
        color: #fff;
        font-size: 20px;
      }
    }

    @media (max-width: 992px) {
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      border-radius: 0;

      &.closeIcon {
        padding: 50px 15px;
      }
    }
  }
}
</style>
