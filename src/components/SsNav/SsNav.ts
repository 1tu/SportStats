import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { store, State } from '../../store/index';
import { SsUser } from '../index';
import { routes } from '../../router';

@Component({
  template: require('./SsNav.pug'),
  components: { SsUser }
})
export class SsNav extends Vue {
  routes = routes;
  @State navShow;
}

