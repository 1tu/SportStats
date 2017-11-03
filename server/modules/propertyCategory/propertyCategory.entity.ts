import { Entity, Column } from 'typeorm';
import { AEntityBase } from '../../common/entity';

@Entity()
export class PropertyCategoryEntity extends AEntityBase {
  @Column({ length: 50, unique: true, nullable: false })
  name: string;
}
