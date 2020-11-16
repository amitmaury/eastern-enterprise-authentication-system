import authService from "../../services/login/auth.service";
import router from "../../router";

const user = JSON.parse(localStorage.getItem("refreshToken"));
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

const actions = {

  login({ commit }, loginUserData) {
    console.log("aut", router)
    commit("loginRequest", loginUserData);
    authService.loginAPI(loginUserData)
      .then(
        loginUserData => {
          commit("loginSuccess", loginUserData);
          router.push("/viewUser");
        },
        error => {
          commit("loginFailure", error);
        }
      );
  },
  logout({ commit }) {

    authService.logout();
    router.push("/login");
    commit("logout");
  },

  register({ commit }, registerUserData) {
    commit("registerRequest", registerUserData);
    authService.register(registerUserData).then(
      registerUserData => {
        commit("registerSuccess", registerUserData);
      },
      error => {
        commit("registerFailure", error);
      }
    );
  },
  resetState({ commit }) {
    commit("resetRegisterState");
  },
};

const mutations = {
  loginRequest(state) {
    state.status = { loading: true };
  },
  loginSuccess(state) {
    state.status = {};
    state.status.loggedIn = true;
  },
  loginFailure(state, error) {
    state.status = {};
    state.status.loggedIn = true;
    state.status.type = "Error";
    state.status.message = error.message
  },
  logout(state) {
    state.status = {};
  },
  registerRequest(state) {
    state.status = { registering: true };
  },
  registerSuccess(state) {
    state.status = {};
    state.status.registered = true;
    state.status.type = "Success";
    state.status.message = "User Registered Succesfully"
  },
  registerFailure(state, error) {
    state.status = {};
    state.status.registered = true;
    state.status.type = "Error";
    state.status.message = error.message

  },
  resetRegisterState(state) {
    state.status = {};
  },
};

export const auth = {
  namespaced: true,
  state,
  actions,
  mutations
};