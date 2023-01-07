export default {
  onResize(state) {
    state.isSmallScreen = window.innerWidth <= 992;
  },
};
