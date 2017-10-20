import { filter } from 'lodash-es';

export default {
  filter(arr: any[], predicate: any) {
    return filter(arr, predicate);
  }
};
