import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Sportsman } from '../../../@types';
import { makeHeaders } from '../../helpers/index';
import { app } from '../../main';
import { SportsmanListAction } from '../../store/modules/index';

@Component({
  template: require('./SsSportsmanList.pug')
})
export class SsSportsmanList extends Vue {
  items: Sportsman[] = [];
  headers = makeHeaders<Sportsman>(Sportsman, {
    actionList: [
      { name: 'show', onClick: (id: number) => app.$router.push(`/sportsman/${id}`) }
    ]
  });

  @SportsmanListAction itemsGet;
  async mounted() {
    this.items = await this.itemsGet();
  }
}

