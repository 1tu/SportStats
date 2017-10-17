import Vue from 'vue';
import './api/_interceptor';
import './charts';

import './stylus/main.styl';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

import { i18n } from './i18n';
import { router } from './router';
import { store } from './store';
import { SsApp } from './components/SsApp';

new Vue({
  i18n,
  router,
  store,
  el: '#app',
  render: h => h(SsApp)
});
