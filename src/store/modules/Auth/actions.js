import axios from "axios";
import iziToast from "izitoast";

export default {
  // ============ Logout
  logOut(context, payload) {
    if (payload.serverlogOut) {
      context.commit("remove_user_data");

      setTimeout(() => {
        location.reload();
      }, 500);
    } else {
      axios({
        method: "post",
        url: "logout",
      })
        .then(() => {
          iziToast.success({
            message:
              context.getters["lang_module/lang"] == "en"
                ? "Logout Successed"
                : "تم تسجيل الخروج بنجاح",
            position: "topCenter",
          });
          context.commit("remove_user_data");

          setTimeout(() => {
            location.reload();
          }, 500);
        })
        .catch((err) => {
          console.log(err);
          iziToast.error({
            message: err.response.data.message,
          });
        });
    }
  },

  // ============ Login
  logIn(context, payload) {
    context.commit("set_userId", payload?.userId || null);
    context.commit("set_token", payload?.token || null);
    context.commit("set_usertype", payload?.userType || null);
    context.commit("set_userImage", payload?.userImage || null);
    context.commit("set_userPhone", payload?.userPhone || null);
    context.commit("set_userName", payload?.userName || null);

    iziToast.success({
      message:
        context.getters["lang_module/lang"] == "en"
          ? "Welcome to Luster"
          : "Luster مرحبا بك في",
      position: "topCenter",
    });

    setTimeout(() => {
      location.reload();
    }, 500);
  },
};
