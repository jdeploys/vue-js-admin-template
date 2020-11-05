import Vue from 'vue';
import Component from 'vue-class-component';
import Quasar from 'quasar';

@Component
export default class ValidationMixins extends Vue {
  private vLang = (Quasar.lang.props as any).validation;
  /**
   * 필수 값인지 확인
   * @param customErrorMessage 표시될 커스텀 메시지
   */
  public $_validation_required(customErrorMessage?: string): Function {
    return (value: string): string | boolean => {
      if (value) {
        return true;
      }
      return customErrorMessage || this.vLang.required;
    };
  }

  public $_validation_checkId(customErrorMessage?: string): Function {
    return (value: string) => {
      if (value === 'js') {
        return true;
      }

      return this.vLang.enterValidId;
    };
  }

  public $_validation_checkPw(customErrorMessage?: string): Function {
    return (value: string) => {
      if (value === 'admin') {
        return true;
      }

      return this.vLang.enterValidPw;
    };
  }
}
