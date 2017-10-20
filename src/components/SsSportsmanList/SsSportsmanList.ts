import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Sportsman } from '../../../@Types';
import { dSportsmanItemsGet } from '../../store/modules/sportsmanList/index';
import { makeHeaders } from '../../helpers/index';
import { app } from '../../main';

@Component({
  template: require('./SsSportsmanList.pug')
})
export class SsSportsmanList extends Vue {
  items: Sportsman[] = [];
  headers = makeHeaders<Sportsman>(Sportsman, {
    actionList: [
      { name: 'show', onClick: (id: number) => app.$router.push(`/user/${id}`) }
    ]
  });


  async mounted() {
    this.items = await dSportsmanItemsGet(this.$store);
  }
}

