import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { AEntityTimestamp } from '../../common/entity';
import { SportEntity } from '../sport/sport.entity';
import { PropertyEntity } from '../property/property.entity';

@Entity()
export class TemplateMeasurementEntity extends AEntityTimestamp {
  @Column({ length: 150, unique: true, nullable: false })
  name: string;

  @ManyToOne(type => SportEntity)
  sport: SportEntity;

  @ManyToMany(type => PropertyEntity)
  @JoinTable()
  propertyList: PropertyEntity[];
}
