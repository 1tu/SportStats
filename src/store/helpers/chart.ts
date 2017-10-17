import _ from 'lodash';
import moment from 'moment';
import { SsModel, Property, PropertyIndividual, Sportsman, DateRange } from '../../../@Types/index';
import { IndividualSeriesOptions } from 'highcharts';

export function seriesFromPropertyIndividualList(arr: PropertyIndividual[], groupProp?: string): IndividualSeriesOptions[] {
  return _(arr).groupBy(groupProp || 'property.name').transform((res, val: PropertyIndividual[], key: string) => {
    res.push({
      name: key,
      data: val.map(prop => [new Date(prop.created_at).getTime(), parseFloat(prop.value as any)]).sort((a, b) => a[0] > b[0] ? 1 : -1)
    });
  }, []).value();
}


export function seriesListFromSportsman(arr: Sportsman[]): { [prop: string]: IndividualSeriesOptions[] } {
  return _(arr)
    .map(item => [...item.measurements.map(
      m => ({ ...m, sportsman_id: item.id })
    )])
    .flatten().groupBy('property.name')
    .mapValues(propList => seriesFromPropertyIndividualList((propList as any), 'sportsman_id')).value();
}


export function seriesGrowingFromSeries(series: IndividualSeriesOptions[], propertyName: string): IndividualSeriesOptions[] {
  const data = _(series).filter(item => item.data.length > 1).map(item =>
    [item.name, _.round(item.data[item.data.length - 1][1] - item.data[0][1], 2)]
  ).value();

  return [{ name: propertyName + ' growing', data: (data as any) }];
}

export function seriesByDateRange(series: IndividualSeriesOptions[], dates: DateRange): IndividualSeriesOptions[] {
  if (!dates.start && !dates.end) return series;
  return series.map((dataSet) => {
    const newDataSet = { ...dataSet };
    newDataSet.data = newDataSet.data.filter(data => {
      const mDate = moment(data[0]);
      return (dates.start ? mDate.isAfter(dates.start) : true) && (dates.end ? mDate.isBefore(dates.end) : true);
    });
    return newDataSet;
  });
}
