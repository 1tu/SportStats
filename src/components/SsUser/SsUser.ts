import Vue from 'vue';
import Component from 'vue-class-component';
import { dGet } from '../../store/modules/user';
import { User } from '../../../@Types/Models';
// import { readProductNames, readTotalAmountWithoutDiscount, dispatchUpdateTotalAmount } from './store';

@Component({
  template: require('./SsUser.pug')
})
export class SsUser extends Vue {
  item: User = null;

  async mounted() {
    this.item = await dGet(this.$store, parseInt(this.$route.params.id));
  }
}

