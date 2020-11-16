<template>
  <section class="section" id="loginWrapper">
    <PopupBox
      v-if="status.registered"
      :type="status.type"
      :message="status.message"
    ></PopupBox>
    <b-loading :is-full-page="true" v-model="status.registering"></b-loading>
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-2"></div>
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article>
                <p class="title login-title">Register</p>
              </article>
              <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                  <form>
                    <b-field label="Name">
                      <b-input
                        type="text"
                        placeholder="Enter Name"
                        autofocus
                        v-model="registerUserData.name"
                        :message="nameErrMsg"
                        required
                      >
                      </b-input>
                    </b-field>

                    <b-field label="Email">
                      <b-input
                        type="email"
                        placeholder="Enter Email"
                        v-model="registerUserData.email"
                        required
                        :message="emailErrMsg"
                      >
                      </b-input>
                    </b-field>

                    <b-field label="Password">
                      <b-input
                        type="password"
                        placeholder="Enter Password"
                        v-model="registerUserData.password"
                        :message="passwordErrMsg"
                        minlength="6"
                        required
                      ></b-input>
                    </b-field>
                    <b-button
                      type="submit"
                      @click="submit()"
                      :disabled="
                        registerUserData.name === '' ||
                        registerUserData.email === '' ||
                        registerUserData.password === ''
                      "
                      >Signup</b-button
                    >
                    <span class="login-nav-btn">
                      <label> Alreday Registered ? </label>
                      <b-button
                        type="is-link"
                        class="register"
                        @click="goToLoginPage()"
                        >Login</b-button
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
  name: "RegisterUser",
  components: { PopupBox },
  data: () => ({
    registerUserData: { name: "", email: "", password: "" },
    nameErrMsg: "",
    passwordErrMsg: "",
    emailErrMsg: "",
  }),
  methods: {
    ...mapActions("auth", ["register"]),
    submit() {
      if (this.registerUserData.password.length >= 6) {
        this.register(this.registerUserData);
        this.registerUserData = {};
      }
    },
    goToLoginPage() {
      this.$router.push("/login");
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