import Vue from 'vue';
import Component from 'vue-class-component';
import { User } from '../../../@Types/Models';
import { dGetAll } from '../../store/modules/userList/index';

@Component({
  template: require('./SsUserList.pug'),

})
export class SsUserList extends Vue {
  test = 'tt';
  headers: { text: string, value?: keyof User, align?: string, sortable?: boolean }[] = [
    {
      text: 'Id',
      align: 'left',
      sortable: false,
      value: 'id'
    },
    { text: 'Email', value: 'email' },
    { text: 'Username', value: 'username' },
    { text: 'Role', value: 'role_id' },
    { text: 'Actions' }
  ];

  items: User[] = [];

  async mounted() {
    this.items = await dGetAll(this.$store);
  }
}

