import Vue from 'vue';
import Component from 'vue-class-component';
import { Team } from '../../../@Types';
import { dTeamItemsGet } from '../../store/modules/teamList/index';

@Component({
  template: require('./SsTeamList.pug')
})
export class SsTeamList extends Vue {
  items: Team[] = [];
  headers: { text: string, value?: keyof Team, align?: string, sortable?: boolean }[] = [
    {
      text: 'Id',
      align: 'left',
      sortable: false,
      value: 'id'
    },
    { text: 'Name', value: 'name' },
    { text: 'Full name', value: 'name_full' },
    { text: 'Actions', sortable: false }
  ];


  async mounted() {
    this.items = await dTeamItemsGet(this.$store);
  }
}

