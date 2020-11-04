import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { UrlDef, UrlName } from "@/router/url";
import { authModule } from "@/store";
import AuthLayout from "@/layouts/Auth.vue";
import DashboardPage from "@/pages/dashboard/DashboardPage.vue";
import SignInPage from "@/pages/auth/SignInPage.vue";
import BaseLayout from "@/layouts/Base.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: UrlDef.Root,
    redirect: () => {
      if (authModule.isSignIn) {
        return UrlDef.Dashboard;
      }
      return UrlDef.AuthSignIn;
    },
    component: BaseLayout,
    children: [
      {
        path: UrlDef.Dashboard,
        name: UrlName.Dashboard,
        component: DashboardPage
      }
    ]
  },
  {
    path: UrlDef.Auth,
    component: AuthLayout,
    children: [
      {
        path: UrlDef.AuthSignIn,
        name: UrlName.AuthSignIn,
        component: SignInPage
      }
    ]
  },
  // 잘못된 주소 방지
  {
    path: "*",
    redirect: UrlDef.Root
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
