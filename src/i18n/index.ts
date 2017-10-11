import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const messages = {
  en: {
    message: require('./en.json')
  },
  ru: {
    message: require('./ru.json')
  }
};

localStorage.language = localStorage.language || navigator.language;

export const i18n = new VueI18n({
  locale: localStorage.language,
  messages,
  fallbackLocale: 'ru',
});
