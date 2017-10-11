import Vue from 'vue';
import Component from 'vue-class-component';
import { store } from '../../store/';

@Component({
  template: require('./SsHeader.pug'),
})
export class SsHeader extends Vue {

  toggleNav() {
    store.commit('TOGGLE_NAV');
  }

  switchLang() {
    localStorage.language = this.$i18n.locale === 'en' ? 'ru' : 'en';
    location.reload();
  }
}

