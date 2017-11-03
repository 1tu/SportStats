import { Entity, Column, ManyToOne } from 'typeorm';
import { AEntityBase } from '../../common/entity';
import { PropertyCategoryEntity } from '../propertyCategory/propertyCategory.entity';
import { QuantityEntity } from '../quantity/quantity.entity';

@Entity()
export class PropertyEntity extends AEntityBase {
  @Column({ length: 100, nullable: false, unique: true })
  name: string;

  @ManyToOne(type => PropertyCategoryEntity)
  category: PropertyCategoryEntity;

  @ManyToOne(type => QuantityEntity)
  quantity: QuantityEntity;
}
