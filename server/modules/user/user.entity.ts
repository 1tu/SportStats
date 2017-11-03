import { Entity, Column, ManyToOne, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { AEntityTimestamp } from '../../common/entity';
import { RoleEntity } from '../role/role.entity';
import { ProfileEntity } from '../profile/profile.entity';
import { TokenEntity } from '../token/token.entity';
import { OrganizationEntity } from '../organization/organization.entity';

@Entity()
export class UserEntity extends AEntityTimestamp {
  @Column({ length: 50 })
  username: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 200 })
  password: string;

  @Column('timestamp with time zone')
  enrollExpiresAt: Date;

  @OneToMany(type => TokenEntity, token => token.user)
  tokenList: TokenEntity[];

  @ManyToOne(type => RoleEntity)
  role: RoleEntity;

  @ManyToOne(type => OrganizationEntity)
  organization: OrganizationEntity;

  @OneToOne(type => ProfileEntity)
  @JoinColumn()
  profile: ProfileEntity;
}
