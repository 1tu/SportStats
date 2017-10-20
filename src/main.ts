import Vue from 'vue';
import './api/_interceptor';
import './charts';

import './stylus/main.styl';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

import { i18n } from './i18n';
import { router } from './router';
import { store } from './store';
import filters from './filters';
import { SsApp } from './components/SsApp';

export const app = new Vue({
  i18n,
  router,
  store,
  filters,
  el: '#app',
  render: h => h(SsApp)
});
