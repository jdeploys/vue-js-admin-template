import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({ name: 'ui' })
export default class UiModule extends VuexModule {
  // data
  private _isLayoutLeftDrawerOpen = true;
  private _isDarkMode = false;

  // mutation
  @Mutation
  public updateIsLayoutLeftDrawerOpen(isOpen: boolean) {
    this._isLayoutLeftDrawerOpen = isOpen;
  }

  @Mutation
  public updateIsDarkMode(isDarkMode: boolean) {
    this._isDarkMode = isDarkMode;
  }

  get isLayoutLeftDrawerOpen() {
    return this._isLayoutLeftDrawerOpen;
  }

  get isDarkMode() {
    return this._isDarkMode;
  }
}
