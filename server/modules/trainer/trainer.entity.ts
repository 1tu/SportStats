import { Entity, Column, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import { AEntityTimestamp } from '../../common/entity';
import { ProfileEntity } from '../profile/profile.entity';
import { UserEntity } from '../user/user.entity';
import { SportEntity } from '../sport/sport.entity';
import { SportsmanEntity } from '../sportsman/sportsman.entity';
import { TeamEntity } from '../team/team.entity';

@Entity()
export class TrainerEntity extends AEntityTimestamp {
  @OneToOne(type => ProfileEntity)
  @JoinColumn()
  profile: ProfileEntity;

  @OneToOne(type => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @OneToOne(type => SportEntity)
  @JoinColumn()
  sport: SportEntity;

  @ManyToMany(type => SportsmanEntity, sportsman => sportsman.trainerList)
  sportsmanList: SportsmanEntity[];

  @ManyToMany(type => TeamEntity, team => team.trainerList)
  teamList: TeamEntity[];
}
