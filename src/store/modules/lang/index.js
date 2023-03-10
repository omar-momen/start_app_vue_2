import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,

  state() {
    return {
      default_lang: "en",
      lang: localStorage.getItem("blank_App_Lang"),
    };
  },
  mutations,
  actions,
  getters,
};
