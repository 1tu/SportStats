import { Entity, Column, ManyToOne, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { AEntityTimestamp } from '../../common/entity';
import { OrganizationEntity } from '../organization/organization.entity';
import { SportEntity } from '../sport/sport.entity';
import { ImageEntity } from '../image/image.entity';
import { TrainerEntity } from '../trainer/trainer.entity';
import { SportsmanEntity } from '../sportsman/sportsman.entity';

@Entity()
export class TeamEntity extends AEntityTimestamp {
  @Column({ length: 60, unique: true, nullable: false })
  name: string;

  @Column({ length: 200, unique: true })
  nameFull: string;

  @Column('date')
  birthdate: Date;


  @OneToOne(type => ImageEntity)
  @JoinColumn()
  logo: ImageEntity;

  @ManyToOne(type => OrganizationEntity)
  organization: OrganizationEntity;

  @ManyToOne(type => SportEntity, { nullable: false })
  sport: SportEntity;

  // TODO: сделать таблицу связку с полями hiredAt и firedAt
  @ManyToMany(type => TrainerEntity, trainer => trainer.teamList)
  @JoinTable()
  trainerList: TrainerEntity;

  // TODO: сделать таблицу связку с полями hiredAt и firedAt
  @ManyToMany(type => SportsmanEntity, sportsman => sportsman.teamList)
  @JoinTable()
  sportsmanList: SportsmanEntity;
}
