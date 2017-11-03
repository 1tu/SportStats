import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { AEntityTimestamp } from '../../common/entity';
import { UserEntity } from '../user/user.entity';
import { ImageEntity } from '../image/image.entity';

@Entity()
export class OrganizationEntity extends AEntityTimestamp {
  @Column({ length: 60, unique: true, nullable: false })
  name: string;

  @Column({ length: 200, unique: true })
  nameFull: string;

  @Column('text')
  description: string;

  @Column('date')
  birthdate: Date;

  @Column({ length: 50 })
  country: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 150 })
  address: string;

  @Column({ length: 15 })
  phone: string;

  @Column('timestamp with time zone')
  enrollExpiresAt: Date;


  @ManyToOne(type => UserEntity, { nullable: false })
  owner: UserEntity;

  @OneToOne(type => ImageEntity)
  @JoinColumn()
  logo: ImageEntity;
}
