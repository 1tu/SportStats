import { SsModel, PropertyCategory, PhysicalQuantity } from "./";

export interface Property extends SsModel {
  name: string;
  category: PropertyCategory;
  quantity: PhysicalQuantity;

  property_category_id: number;
  physical_quantity_id: number;
}
