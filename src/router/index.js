import Vue from "vue";
import VueRouter from "vue-router";
const RegisterUser = () => import("../components/login/RegisterUser.vue");
const LoginUser = () => import("../components/login/LoginUser.vue");
import ViewUser from "../views/dashboard/viewUser";

Vue.use(VueRouter);

const routes = [

  {
    path: "/register",
    name: "RegisterUser",
    component: RegisterUser
  },

  {
    path: "/login",
    name: "LoginUser",
    component: LoginUser
  },
  {
    path: "/viewUser",
    name: "ViewUser",
    component: ViewUser
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {


  const accessPages = ["/login", "/register"];

  const authRequired = !accessPages.includes(to.path);
  const loggedIn = localStorage.getItem("refreshToken");

  if (authRequired && !loggedIn) {
    return next("/login");
  }
  next();
});

export default router;