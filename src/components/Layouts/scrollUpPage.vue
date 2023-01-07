<template>
  <div class="scrollUpPage">
    <span class="icon" @click="scrollUpPage"
      ><i class="fas fa-arrow-up"></i
    ></span>
  </div>
</template>

<script>
export default {
  methods: {
    scrollUpPage() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--main);
  color: var(--anti_main);
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 25px;
  right: 30px; // RTL
  z-index: 999;
  font-size: 25px;
  transform: skew(10deg);
  cursor: pointer;
  transition: all 0.2s linear;
  box-shadow: 0 0 10px #eeeeee63;

  i {
    transition: all 0.2s linear;
  }

  &:hover {
    transform: skew(0);

    i {
      transform: 0;
    }
  }
}

body.rtl {
  .icon {
    right: unset;
    left: 20px;
  }
}

html.dark_theme {
  .icon {
    background: var(--main);
    color: var(--anti_main);
  }
}
</style>
