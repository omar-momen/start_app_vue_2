import Vue from "vue";
import Vuex from "vuex";

import lang from "./modules/lang/index.js";
import dom from "./modules/Dom/index.js";
import auth from "./modules/Auth/index.js";
import theme from "./modules/Theme/index.js";
import socket from "./modules/SocketGetters/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lang_module: lang,
    auth_module: auth,
    theme_module: theme,
    socket_module: socket,
    dom_module: dom,
  },

  state() {
    return {
      global_loading: false,
    };
  },
  getters: {
    global_loading(state) {
      return state.global_loading;
    },
  },
  mutations: {
    set_global_loading(state, payload) {
      state.global_loading = payload;
    },
  },
  actions: {},
});
