import { Entity, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { AEntityTimestamp } from '../../common/entity';
import { ProfileEntity } from '../profile/profile.entity';
import { UserEntity } from '../user/user.entity';
import { SportEntity } from '../sport/sport.entity';
import { TrainerEntity } from '../trainer/trainer.entity';
import { MeasurementEntity } from '../measurement/measurement.entity';
import { TeamEntity } from '../team/team.entity';

@Entity()
export class SportsmanEntity extends AEntityTimestamp {
  @Column('smallint', { nullable: false })
  position: number;

  @Column('date')
  careerBeganAt: Date;

  @Column('date')
  careerEndedAt: Date;


  @ManyToOne(type => UserEntity)
  user: UserEntity;

  @ManyToOne(type => ProfileEntity)
  profile: ProfileEntity;

  @ManyToOne(type => SportEntity)
  sport: SportEntity;

  // @OneToMany(type => MeasurementEntity, measurement => measurement.sportsman)
  // measurementList: MeasurementEntity[];

  @ManyToMany(type => TrainerEntity, trainer => trainer.sportsmanList)
  @JoinTable()
  trainerList: TrainerEntity[];

  @ManyToMany(type => TeamEntity, team => team.trainerList)
  teamList: TeamEntity[];
}
