import { Entity, Column } from 'typeorm';
import { AEntityBase } from '../../common/entity';

@Entity()
export class QuantityEntity extends AEntityBase {
  @Column({ length: 100, nullable: false, unique: true })
  name: string;

  @Column({ length: 20, nullable: false, unique: true })
  nameShort: string;

  @Column({ length: 50, nullable: false, default: 'common' })
  type: string;
}
