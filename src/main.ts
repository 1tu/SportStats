import Vue from 'vue';
import Vuetify from 'vuetify';

import './stylus/main.styl';
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
