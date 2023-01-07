import Vue from "vue";
import VueRouter from "vue-router";

// ============================== Start Views ==============================
import Home from "../views/Home.vue"; // Home

// ============ Start Children ============
import HomePage from "../views/children/HomePage.vue";
import AboutUsPage from "../views/children/Static/AboutUsPage.vue";
import ContactUsPage from "../views/children/Static/ContactUsPage.vue";

// ***** Start:: Profile *****
import Profile from "../views/children/Profile/Home.vue";
// ***** Start:: Profile *****
// ============ End Children ============

// ============ Start Auth ============
import AuthHome from "../views/Auth/Home.vue";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import ForgetPassword from "../views/Auth/ForgetPassword";
import VerificationCode from "../views/Auth/VerificationCode";
import ResetPassword from "../views/Auth/ResetPassword";
// ============ End Auth ============

// *************** NotFound
import NotFound from "../views/NotFound.vue";

// ============================== End Views ==============================

// Vuex store
import store from "../store/index";

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // ===================== Start Home =====================
    {
      path: "/",
      component: Home,
      children: [
        // ***** Start:: Home Screen*****
        {
          path: "/",
          name: "HomePage",
          component: HomePage,
        },
        // ***** End:: Home Screen *****

        // ***** Start:: Static Screens *****
        {
          path: "/about-us",
          name: "AboutUsPage",
          component: AboutUsPage,
        },
        {
          path: "/contact-us",
          name: "ContactUsPage",
          component: ContactUsPage,
        },
        // ***** End:: Static Screens *****

        // ***** Start:: Profile *****
        {
          path: "/profile",
          name: "Profile",
          component: Profile,
        },
        // ***** End:: Profile *****
      ],
    },
    // ===================== End Home =====================

    // ======= Start Auth =======
    {
      path: "/authentication",
      component: AuthHome,
      children: [
        {
          alias: "/authentication",
          path: "login",
          name: "Login",
          component: Login,
        },
        {
          path: "register",
          name: "Register",
          component: Register,
        },
        {
          path: "forget-password",
          name: "ForgetPassword",
          component: ForgetPassword,
        },
        {
          path: "verification-code",
          name: "VerificationCode",
          component: VerificationCode,
        },
        {
          path: "reset-password",
          name: "ResetPassword",
          component: ResetPassword,
        },
      ],
    },
    // ======= End Auth =======

    // ======= Start NotFound =======
    { path: "/:notFound(.*)", name: "NotFound", component: NotFound },
    // ======= End NotFound =======
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

// ======= Start Router Guards =======
import iziToast from "izitoast";
const LANG = store.getters["lang_module/lang"];
const TOKEN = store.getters["auth_module/currentUser"].token;

router.beforeEach((to, from, next) => {
  if (
    !TOKEN &&
    !to.path.includes("authentication") &&
    to.path != "/" &&
    to.path != "/about-us" &&
    to.path != "/contact-us"
  ) {
    next({ name: "Login" });
  } else if (to.path.includes("authentication") && TOKEN) {
    next("/");
  } else {
    next();
  }
});

// **** Progres_Bar Animation
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
    store.commit("set_global_loading", true);
  }
  next();
});
router.afterEach((to, from) => {
  setTimeout(() => {
    NProgress.done();
    store.commit("set_global_loading", false);
  }, 1000);
});
// ======= End Router Guards =======

Vue.use(VueRouter);
export default router;
