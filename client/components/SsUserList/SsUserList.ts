import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { User } from '../../../@types';
// import { dUserItemsGet } from '../../store/modules/userList/index';
import { makeHeaders } from '../../helpers/index';
import { app } from '../../main';
import { UserListAction } from '../../store/modules/index';

@Component({ template: require('./SsUserList.pug') })
export class SsUserList extends Vue {
  items: User[] = [];
  headers = makeHeaders<User>(User, {
    actionList: [
      { name: 'show', onClick: (id: number) => app.$router.push(`/user/${id}`) }
    ]
  });

  @UserListAction itemsGet;
  async mounted() {
    this.items = await this.itemsGet();
  }
}

