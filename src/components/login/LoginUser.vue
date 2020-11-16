<template>
  <section class="section" id="loginWrapper">
    <PopupBox
      v-if="status.loggedIn"
      :type="status.type"
      :message="status.message"
    ></PopupBox>
    <b-loading :is-full-page="true" v-model="status.loading"></b-loading>
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-2"></div>
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article>
                <p class="title login-title">Login</p>
              </article>
              <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                  <form>
                    <b-field label="Email">
                      <b-input
                        type="email"
                        placeholder="Enter Email"
                        v-model="loginUserData.email"
                        :message="emailErrMsg"
                        required
                      >
                      </b-input>
                    </b-field>

                    <b-field label="Password">
                      <b-input
                        required
                        type="password"
                        :message="passwordErrMsg"
                        placeholder="Enter Password"
                        v-model="loginUserData.password"
                        minlength="6"
                      ></b-input>
                    </b-field>
                    <b-button
                      type="submit"
                      @click="userLogin()"
                      :disabled="
                        loginUserData.email === '' ||
                        loginUserData.password === ''
                      "
                      >Login</b-button
                    >
                    <span class="register-nav-btn">
                      <label> New User ? </label>
                      <b-button
                        type="is-link"
                        class="register"
                        @click="goToRegisterPage()"
                      >
                        Register</b-button
                      >
                    </span>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-vertical is-2"></div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from "vuex";
import PopupBox from "../reusable/dialogBox/PopupBox";
export default {
  name: "LoginUser",
  components: { PopupBox },
  data: () => ({
    loginUserData: { email: "", password: "" },
    passwordErrMsg: "",
    emailErrMsg: "",
  }),
  created() {
    this.logout();
  },
  methods: {
    ...mapActions("auth", ["login", "logout"]),
    userLogin() {
      if (this.loginUserData.password.length >= 6) {
        this.login(this.loginUserData);
        this.loginUserData = {};
      }
    },
    goToRegisterPage() {
      this.$router.push("/register");
    },
  },
  computed: {
    ...mapState("auth", ["status"]),
  },
  beforeDestroy() {
    this.$store.dispatch("auth/resetState");
  },
};
</script>

<style scoped>
@import "../../styles/login.scss";
</style>