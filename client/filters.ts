import { filter } from 'lodash';

export default {
  filter(arr: any[], predicate: any) {
    return filter(arr, predicate);
  }
};
