import Vue from 'vue';
import Component from 'vue-class-component';
import { SsHeader, SsNav } from '../';
// import { readProductNames, readTotalAmountWithoutDiscount, dispatchUpdateTotalAmount } from './store';

@Component({
  template: require('./SsApp.pug'),
  components: { SsHeader, SsNav }
})
export class SsApp extends Vue {

}
