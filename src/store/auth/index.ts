import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({ name: 'auth' })
export default class AuthModule extends VuexModule {
  // data
  private _isSignIn = false;

  // mutation
  @Mutation
  public updateIsSignIn(isSignIn: boolean) {
    this._isSignIn = isSignIn;
  }

  // action
  @Action
  public signIn() {
    this.context.commit('updateIsSignIn', true);
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }

  // getter
  get isSignIn() {
    return this._isSignIn;
  }
}
