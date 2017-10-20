import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { dUserGet } from '../../store/modules/user';
import { User } from '../../../@Types';

@Component({
  template: require('./SsUser.pug')
})
export class SsUser extends Vue {
  item: User = null;

  async mounted() {
    this.item = await dUserGet(this.$store, parseInt(this.$route.params.id));
  }
}

