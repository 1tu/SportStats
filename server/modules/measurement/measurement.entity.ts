import { Entity, Column, ManyToOne } from 'typeorm';
import { AEntityTimestamp } from '../../common/entity';
import { PropertyEntity } from '../property/property.entity';
import { SportsmanEntity } from '../sportsman/sportsman.entity';
import { TrainerEntity } from '../trainer/trainer.entity';
import { TemplateMeasurementEntity } from '../templateMeasurement/templateMeasurement.entity';

@Entity()
export class MeasurementEntity extends AEntityTimestamp {
  @Column('decimal', { precision: 14, scale: 4 })
  value: number;

  @ManyToOne(type => PropertyEntity)
  property: PropertyEntity;

  // @ManyToOne(type => SportsmanEntity, sportsman => sportsman.measurementList)
  // sportsman: SportsmanEntity;

  @ManyToOne(type => SportsmanEntity)
  sportsman: SportsmanEntity;

  @ManyToOne(type => TrainerEntity)
  trainer: TrainerEntity;

  @ManyToOne(type => TemplateMeasurementEntity)
  template: TemplateMeasurementEntity;
}
