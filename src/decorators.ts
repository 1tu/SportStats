import { PropOptions } from 'vue';
import { createDecorator } from 'vue-class-component';
import _ from 'lodash';

type Constructor = {
  new(...args: any[]): any;
};

export const Input = (type: PropOptions | Constructor | Constructor[] = Object) => createDecorator((options, key) => {
  options.props = options.props || [];
  if (_.isArray(options.props)) {
    options.props.push(key);
  } else if (!options.props[key]) {
    options.props[key] = type;
  }
});
