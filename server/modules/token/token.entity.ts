import { Entity, Column, ManyToOne } from 'typeorm';
import { AEntityTimestamp } from '../../common/entity';
import { UserEntity } from '../user/user.entity';

@Entity()
export class TokenEntity extends AEntityTimestamp {
  @Column({ length: 50, nullable: false, unique: true })
  token: string;

  @Column({ default: false })
  isRewoked: boolean;

  @ManyToOne(type => UserEntity, user => user.tokenList)
  user: UserEntity;
}
