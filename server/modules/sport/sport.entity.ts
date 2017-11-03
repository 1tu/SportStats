import { Entity, Column, OneToMany } from 'typeorm';
import { AEntityTimestamp } from '../../common/entity';
import { SportsmanEntity } from '../sportsman/sportsman.entity';

@Entity()
export class SportEntity extends AEntityTimestamp {
  @Column({ length: 100, unique: true, nullable: false })
  name: string;

  @OneToMany(type => SportsmanEntity, sportsman => sportsman.sport)
  sportsmanList: SportsmanEntity[];
}
