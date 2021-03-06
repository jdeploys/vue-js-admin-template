import Vue from 'vue';
import '@/styles/quasar.scss';
import 'quasar/dist/quasar.ie.polyfills';
import enUs from './lang/en-us';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import { Dialog, Quasar } from 'quasar';

Vue.use(Quasar, {
  config: {},
  plugins: {
    Dialog
  },
  lang: enUs
});
