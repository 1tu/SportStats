import Vue from 'vue'
import {
  Vuetify, VApp, VNavigationDrawer, VFooter, VList, VSelect, VDataTable,
  VBtn, VIcon, VGrid, VToolbar, VForm, VTextField, transitions
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp, VNavigationDrawer, VFooter, VList, VBtn, VIcon, VGrid, VToolbar,
    VForm, VTextField, VSelect, transitions, VDataTable
  }
})

import App from './App.vue'
import { router } from './router'
import { i18n } from './i18n'

new Vue({
  i18n,
  router,
  el: '#app',
  render: h => h(App)
})
