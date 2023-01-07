// =============> core Vue
import Vue from "vue";

// =============> Main app
import App from "./App.vue";

// =============> Router
import router from "./router";

// =============> Store
import store from "./store";

// =============> language && Theme
store.dispatch("lang_module/handleLang"); // ==> Store (Vuex) <==
store.dispatch("theme_module/handleTheme"); // ==> Store (Vuex) <==

// =============>  Start Axios
import axios from "axios";
Vue.prototype.$axios = axios; // Glopal variable

// **** CONSTS
const USER_TOKEN = store.getters["auth_module/currentUser"].token;
const CURRENT_LANG = store.getters["lang_module/lang"];

// Global headers
axios.interceptors.request.use(
  function (config) {
    NProgress.start();
    return config;
  },
  function (error) {
    NProgress.done();
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    NProgress.done();
    return response;
  },
  function (error) {
    NProgress.done();
    if (
      error.response.status == "401" &&
      error.response.config.url != "login" &&
      error.response.config.url != "logout"
    ) {
      store.dispatch("auth_module/logOut", { serverlogOut: true });
    }
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = "https://develobug.com/luster_back/public/api/"; // baseurl
axios.defaults.headers.common["cache-control"] = "no-cache";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Accept-language"] = CURRENT_LANG;
axios.defaults.headers.common["lang"] = CURRENT_LANG;

// Set Token If Exists
if (USER_TOKEN) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + USER_TOKEN;
}
// =============>  End Axios

// =============> iziToast
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
Vue.prototype.$iziToast = iziToast; // Glopal variable
Vue.use(iziToast);

// =============> Moment
const moment = require("moment");
// if (CURRENT_LANG == "ar") {
//   require("moment/locale/ar");
// }
Vue.use(require("vue-moment"), {
  moment,
});

// =============> AOS
import AOS from "aos";
import "aos/dist/aos.css";

// ======== Swal
import Sweetalert from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(Sweetalert);

// =============> i18n
import i18n from "./i18n";

// =============> vuetify
import vuetify from "./plugins/vuetify";

// =============> Vue Slike Carousal
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
Vue.component("vue-slick", VueSlickCarousel);

// =============>  Main Style
import "./assets/scss/main.scss";

// =============> Google Maps
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: "AIzaSyDRymdCLWxCwLHFnwv36iieKAMjiwk8sdc",
    libraries: "places", // This is required if you use the Auto complete plug-in
  },
});

// =============> Mixins
import helpers from "./mixins/helpers";
Vue.mixin(helpers);

// =============> Progress Component
import VueEllipseProgress from "vue-ellipse-progress";
Vue.use(VueEllipseProgress);

// ==================== Import && Register Globbal Components ====================
import BaseButton from "./components/UI/BaseButton.vue";
Vue.component("base-button", BaseButton);

import ImageModal from "./components/Modals/ImageModal.vue";
Vue.component("image-modal", ImageModal);

import BaseModal from "./components/Modals/BaseModal.vue";
Vue.component("base-modal", BaseModal);

import SideMenu from "./components/Modals/SideMenu.vue";
Vue.component("side-menu", SideMenu);

import Breadcrumb from "./components/Global/Breadcrumb.vue";
Vue.component("Breadcrumb", Breadcrumb);

import MainGif from "./components/Loaders/MainGif.vue";
Vue.component("MainGif", MainGif);

// ********** Inputs
import BaseInput from "@/components/Forms/BaseInput.vue";
Vue.component("base-input", BaseInput);
import BaseSelectInput from "@/components/Forms/BaseSelectInput.vue";
Vue.component("base-select-input", BaseSelectInput);

// ********** Uploads
import UplodeImage from "./components/Uploads/UplodeImage.vue";
Vue.component("uplode-image", UplodeImage);
import UplodeImageDirect from "./components/Uploads/UplodeImageDirect.vue";
Vue.component("uplode-image-direct", UplodeImageDirect);

// =============> Attatch and Mount
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
