import Vue from 'vue';
import Component from 'vue-class-component';
import { Sportsman } from '../../../@Types/index';
import { dSportsmanGet, gSportsmanSeriesFromPropertyIndividualList } from '../../store/modules/index';
import _ from 'lodash';
import Highstock, { ChartObject } from 'highcharts/highstock';

@Component({
  template: require('./SsSportsman.pug'),
})
export class SsSportsman extends Vue {
  item: Sportsman = null;
  chartOptions: Highstock.Options = {
    title: { text: 'График измерений' },
    chart: {
      type: 'spline'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date'
      }
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e.%m.%Y}<br>{point.y:.2f}'
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: true
        }
      }
    },
    series: []
  };

  async mounted() {
    this.item = await dSportsmanGet(this.$store, parseInt(this.$route.params.id));
    this.chartOptions.series = gSportsmanSeriesFromPropertyIndividualList(this.$store);
  }
}

