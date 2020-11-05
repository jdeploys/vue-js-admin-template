// @ts-ignore
import quasarEn from 'quasar/lang/en-us';
import { UrlName } from '@/config/router/url';

const enUs = {
  ...quasarEn,
  appName: 'Vue 2 JS Admin Template',
  // 추가 번역 파일 커스텀...
  auth: {
    signIn: 'Sign In',
    id: 'ID',
    pw: 'Password'
  },
  validation: {
    required: 'Required field',
    enterValidId: 'Please enter "js"',
    enterValidPw: 'Please enter "admin"'
  },
  // navigation menu
  menu: {
    [UrlName.Dashboard]: 'Dashboard',
    [UrlName.Setting]: 'Setting'
  },
  msg: {
    signOutConfirm: 'Confirm sign out?'
  }
};

export default enUs;
