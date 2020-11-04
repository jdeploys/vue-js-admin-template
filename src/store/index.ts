import Vue from "vue";
import Vuex from "vuex";
import AuthModule from "@/store/auth";
import UiModule from "@/store/ui";
import { getModule } from "vuex-module-decorators";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth: AuthModule,
    ui: UiModule
  }
});

// 실제 코드 부에서 참조를 여러 곳에서 하지 않도록 index 에 재정의 합니다.
export const authModule = getModule(AuthModule, store);
export const uiModule = getModule(UiModule, store);

export default store;
