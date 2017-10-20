import { SsModel, PropertyCategory, PhysicalQuantity } from './';

export class Property extends SsModel {
  constructor() {
    super();
    this.name = null;
  }
  name: string;

  category: PropertyCategory;
  quantity: PhysicalQuantity;
  property_category_id: number;
  physical_quantity_id: number;
}
