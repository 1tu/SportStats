import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { makeHeaders } from '../../helpers/index';
import { Property } from '../../../@types/index';
import { PropertyListAction } from '../../store/modules/index';

@Component({
  template: require('./SsPropertyList.pug'),
})
export class SsPropertyList extends Vue {
  items: Property[] = [];
  headers = makeHeaders<Property>(Property);
  @PropertyListAction itemsGet;

  async mounted() {
    this.items = await this.itemsGet();
  }
}

