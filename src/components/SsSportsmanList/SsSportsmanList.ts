import Vue from 'vue';
import Component from 'vue-class-component';
import { Sportsman } from '../../../@Types';
import { dSportsmanItemsGet } from '../../store/modules/sportsmanList/index';

@Component({
  template: require('./SsSportsmanList.pug')
})
export class SsSportsmanList extends Vue {
  items: Sportsman[] = [];
  headers: { text: string, value?: keyof Sportsman, align?: string, sortable?: boolean }[] = [
    {
      text: 'Id',
      align: 'left',
      sortable: false,
      value: 'id'
    },
    { text: 'Position', value: 'position' },
    { text: 'Actions', sortable: false }
  ];


  async mounted() {
    this.items = await dSportsmanItemsGet(this.$store);
  }
}

