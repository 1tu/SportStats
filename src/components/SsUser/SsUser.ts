import Vue from 'vue';
import Component from 'vue-class-component';
import { dUserGet } from '../../store/modules/user';
import { User } from '../../../@Types';
// import { readProductNames, readTotalAmountWithoutDiscount, dispatchUpdateTotalAmount } from './store';

@Component({
  template: require('./SsUser.pug')
})
export class SsUser extends Vue {
  item: User = null;

  async mounted() {
    this.item = await dUserGet(this.$store, parseInt(this.$route.params.id));
  }
}

