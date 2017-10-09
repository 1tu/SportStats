/* beautify preserve:start */
import Vue from 'vue'
import {
  Vuetify, VApp, VNavigationDrawer, VFooter, VList, VSelect, VDataTable, VAvatar,
  VTooltip, VDialog, VBtn, VIcon, VGrid, VToolbar, VForm, VTextField,
  VCard, transitions
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp, VNavigationDrawer, VFooter, VList, VBtn, VIcon, VGrid, VToolbar,
    VAvatar, VTooltip, VDialog, VForm, VTextField, VSelect, VCard, VDataTable,
    transitions
  }
})
/* beautify preserve:end */
import { router } from './router'
import { i18n } from './i18n'
import store from './store'
import App from './App.vue'

new Vue({
  i18n,
  router,
  store,
  el: '#app',
  render: h => h(App)
})
