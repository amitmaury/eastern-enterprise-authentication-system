import Vue from "vue";
import "@babel/polyfill";
import "mutationobserver-shim";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import App from "./App.vue";
import router from "./router";
import store from "./store";

import * as firebase from "firebase";

Vue.config.productionTip = false;
Vue.use(Buefy);

const configOptions = {
  apiKey: "AIzaSyCQroBHTRfJmTiZWcYZZ47OJodaQYik9FQ",
  authDomain: "eastern-enterprise-test.firebaseapp.com",
  databaseURL: "https://eastern-enterprise-test.firebaseio.com",
  projectId: "eastern-enterprise-test",
  storageBucket: "eastern-enterprise-test.appspot.com",
  messagingSenderId: "744066506289",
  appId: "1:744066506289:web:f23bc452f4a68c69d3bf10"
};

firebase.default.initializeApp(configOptions);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");