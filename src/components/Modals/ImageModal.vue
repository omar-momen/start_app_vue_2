<template>
  <transition name="fadeIn">
    <div v-if="show" class="mediaModel" @click="$emit('close')">
      <main @click.stop :class="{ closeIcon: isSmallScreen || closeIcon }">
        <span
          v-if="isSmallScreen || closeIcon"
          @click.stop="$emit('close')"
          class="close"
          ><i class="fas fa-times"></i
        ></span>

        <div class="image">
          <img :src="src" :alt="alt || 'media'" />
        </div>
      </main>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["show", "src", "alt", "closeIcon"],

  computed: {
    ...mapGetters({
      isSmallScreen: "dom_module/isSmallScreen",
    }),
  },
};
</script>

<style lang="scss" scoped>
.mediaModel {
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
    position: relative;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

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

    .image {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        border-radius: 15px;
        max-height: 95vh;
      }
    }

    @media (max-width: 992px) {
      width: 100vw;
      height: 100vh;
      border-radius: 0;

      .image {
        height: 100%;

        img {
          max-height: 100%;
        }
      }
    }
  }
}
</style>
