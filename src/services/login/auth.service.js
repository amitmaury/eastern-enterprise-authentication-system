import firebase from "firebase";

export default {

  loginAPI(loginUserData) {
    return (
      firebase
        .auth()
        .signInWithEmailAndPassword(loginUserData.email, loginUserData.password)
        .then(data => {
          if (data.user) {
            localStorage.setItem("refreshToken", JSON.stringify(data.user.refreshToken));
          }
          var user = JSON.parse(localStorage.getItem("refreshToken"));
          return user;
        })
    )
  },

  logout() {
    localStorage.clear()
  },

  register(registerUserData) {
    return (
      firebase
        .auth()
        .createUserWithEmailAndPassword(registerUserData.email, registerUserData.password)
        .then(data => {
          return data;
        })
    )
  }
};