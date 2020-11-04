import { Module, VuexModule, Mutation } from "vuex-module-decorators";

@Module({ name: "ui" })
export default class UiModule extends VuexModule {
  // data
  private _isLayoutLeftDrawerOpen = false;

  // mutation
  @Mutation
  public updateIsLayoutLeftDrawerOpen(isOpen: boolean) {
    this._isLayoutLeftDrawerOpen = isOpen;
  }

  get isLayoutLeftDrawerOpen() {
    return this._isLayoutLeftDrawerOpen;
  }
}
