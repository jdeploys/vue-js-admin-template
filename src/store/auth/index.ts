import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import router from '@/config/router';
import { UrlName } from '@/config/router/url';

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
    // 서버 로그인 대신 가짜 지연 시간 제공
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }

  @Action
  public async signOut() {
    this.updateIsSignIn(false);
    return router.push(UrlName.AuthSignIn);
  }

  // getter
  get isSignIn() {
    return this._isSignIn;
  }
}
