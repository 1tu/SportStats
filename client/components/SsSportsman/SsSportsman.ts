import Vue from 'vue';
import moment from 'moment';
import { Component, Watch } from 'vue-property-decorator';
import { Sportsman } from '../../../@types/index';
import Highstock, { ChartObject } from 'highcharts/highstock';
import { SportsmanAction, SportsmanGetter } from '../../store/modules/index';
import { TableHeader } from '../../helpers/index';

@Component({ template: require('./SsSportsman.pug'), })
export class SsSportsman extends Vue {
  item: Sportsman = null;
  filter = {
    rangeLimits: null,
    showDateStart: false,
    showDateEnd: false,
    range: { start: null, end: null }
  };
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

  bestMeasurementsHeaders: TableHeader<{ propertyName: string, value: any }>[] = [
    { text: 'Property name', value: 'propertyName' },
    { text: 'Value', value: 'value' }
  ];

  @SportsmanAction itemGet;
  @SportsmanGetter seriesFromMeasurements;
  @SportsmanGetter bestMeasurements;
  @SportsmanGetter('filterDateLimits') sportsmanMeasurementFilterDateLimits;

  @Watch('filter.range.start')
  @Watch('filter.range.end')
  onFilterChange() {
    this.chartOptions.series = this.seriesFromMeasurements(this.filter.range);
  }

  async mounted() {
    this.item = await this.itemGet(parseInt(this.$route.params.id));
    this.chartOptions.series = this.seriesFromMeasurements();
    this.filter.rangeLimits = this.sportsmanMeasurementFilterDateLimits;
    if (this.filter.rangeLimits.start) {
      this.filter.range.start = moment(this.filter.rangeLimits.start).format('YYYY-MM-DD');
      this.filter.range.end = moment(this.filter.rangeLimits.end).format('YYYY-MM-DD');
    }
  }
}

