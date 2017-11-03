import { User } from '../../@types/index';
import { capitalize } from 'lodash';

export interface TableHeader<T> {
  text: string;
  value?: keyof T;
  align?: string;
  sortable?: boolean;
  actionList?: { name: string, onClick: (...arg: any[]) => void }[];
}

interface Class { new(); }
interface MakeHeadersOptions<T> {
  id?: TableHeader<T>;
  actions?: TableHeader<T>;
  includes?: Array<keyof T>;
  excludes?: Array<keyof T>;
  exclude?: (prop: keyof T) => boolean;
  actionList?: { name: string, onClick: (...arg: any[]) => void }[];
}

const defaultMakeHeadersOpts = {
  id: { text: 'Id', align: 'left', sortable: false, value: 'id' },
  actions: { text: 'Actions', sortable: false },
  excludes: ['id', 'created_at', 'updated_at'],
  exclude: function (prop) {
    return !(this.excludes.indexOf(prop) !== -1 || prop.includes('_id'));
  },
};

export function makeHeaders<T>(cls: Class, opts: MakeHeadersOptions<T> = {}): TableHeader<T>[] {
  opts = { ...(defaultMakeHeadersOpts as MakeHeadersOptions<T>), ...opts };
  const instance: T = new cls();
  const keys = (Object.keys(instance) as Array<keyof T>).filter(key => opts.exclude(key));
  let headers = [opts.id].concat(keys.map(key => ({ text: capitalize(key.replace(/_/g, ' ')), value: key })));
  if (opts.actionList) {
    opts.actions.actionList = opts.actionList;
    headers = headers.concat(opts.actions);
  }
  return headers;
}
