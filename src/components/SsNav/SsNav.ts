import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { store } from '../../store/index';
import { SsUser } from '../index';
import { routes } from '../../router';

@Component({
  template: require('./SsNav.pug'),
  components: { SsUser }
})
export class SsNav extends Vue {
  routes = routes;

  get navShow() {
    return store.state.navShow;
  }
}

