import Vue from 'vue';
import Component from 'vue-class-component';
// import { readProductNames, readTotalAmountWithoutDiscount, dispatchUpdateTotalAmount } from './store';

@Component({
  template: require('./SsSport.pug')
})
export class SsSport extends Vue {

  // get productNames() {
  //   return readProductNames(this.$store);
  // }

  // get totalAmountWithoutDiscount() {
  //   return readTotalAmountWithoutDiscount(this.$store);
  // }

  // updateTotal() {
  //   dispatchUpdateTotalAmount(this.$store, 10);
  // }
}

