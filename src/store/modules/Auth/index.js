import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      user: {
        id: localStorage.getItem("blank_App_User_Id"),
        name: localStorage.getItem("blank_App_User_Name"),
        token: localStorage.getItem("blank_App_Token"),
        usertype: localStorage.getItem("blank_App_User_Type"),
        image: localStorage.getItem("blank_App_userImg"),
        phone: localStorage.getItem("blank_App_userPhone"),
      },

      verify_code: null,
      email: null,
    };
  },
  mutations,
  actions,
  getters,
};
