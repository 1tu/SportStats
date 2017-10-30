import Vue from 'vue';
import { Component } from 'vue-property-decorator';
// import { dUserGet } from '../../store/modules/user';
import { User } from '../../../@types';
import { UserAction } from '../../store/modules/index';

@Component({
  template: require('./SsUser.pug')
})
export class SsUser extends Vue {
  item: User = null;

  @UserAction itemGet;
  async mounted() {
    this.item = await this.itemGet(parseInt(this.$route.params.id));
  }
}

