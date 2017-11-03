import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { SsHeader, SsNav } from '../';

@Component({
  template: require('./SsApp.pug'),
  components: { SsHeader, SsNav }
})
export class SsApp extends Vue { }
