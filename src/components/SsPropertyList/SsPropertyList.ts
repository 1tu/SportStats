import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { makeHeaders } from '../../helpers/index';
import { Property } from '../../../@Types/index';
import { dPropertyItemsGet } from '../../store/modules/index';

@Component({
  template: require('./SsPropertyList.pug'),
})
export class SsPropertyList extends Vue {
  items: Property[] = [];
  headers = makeHeaders<Property>(Property);

  async mounted() {
    this.items = await dPropertyItemsGet(this.$store);
  }
}

