import { UrlDef, UrlName } from '@/config/router/url';
import DashboardPage from '@/pages/dashboard/DashboardPage.vue';
import { RouteConfig } from 'vue-router';

export const menuItems: Array<RouteConfig> = [
  {
    path: UrlDef.Dashboard,
    name: UrlName.Dashboard,
    component: DashboardPage
  },
  {
    path: UrlDef.Setting,
    name: UrlName.Setting,
    component: () => import('@/pages/setting/SettingPage.vue')
  }
];
