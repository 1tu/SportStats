import axios from 'axios';
import { CommonApi } from './_base';
import { Property } from '../../@types';

class PropertyApi extends CommonApi<Property> {
  constructor() {
    super('property');
  }
}

export const propertyApi = new PropertyApi();
