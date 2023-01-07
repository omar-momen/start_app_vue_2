export default {
  // ============= Set_User_Data

  set_userId(state, payload) {
    localStorage.setItem("blank_App_User_Id", payload);
    state.user.id = payload;
  },
  set_userName(state, payload) {
    localStorage.setItem("blank_App_User_Name", payload);
    state.user.name = payload;
  },
  set_token(state, payload) {
    localStorage.setItem("blank_App_Token", payload);
    state.user.token = payload;
  },
  set_usertype(state, payload) {
    localStorage.setItem("blank_App_User_Type", payload);
    state.user.usertype = payload;
  },
  set_userImage(state, payload) {
    localStorage.setItem("blank_App_userImg", payload);
    state.user.image = payload;
  },
  set_userPhone(state, payload) {
    localStorage.setItem("blank_App_userPhone", payload);
    state.user.phone = payload;
  },

  // ============= Remove_User_Dataa
  remove_user_data(state) {
    localStorage.removeItem("blank_App_User_Id");
    localStorage.removeItem("blank_App_User_Name");
    localStorage.removeItem("blank_App_Token");
    localStorage.removeItem("blank_App_User_Type");
    localStorage.removeItem("blank_App_userImg");
    localStorage.removeItem("blank_App_userPhone");
    state.user.id = null;
    state.user.token = null;
    state.user.image = null;
    state.user.usertype = null;
    state.user.phone = null;
  },

  // =============
  save_verify_data(state, payload) {
    state.verify_code = payload.code;
    if (payload.email) state.email = payload.email;
  },
};
