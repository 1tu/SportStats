import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { AEntityTimestamp } from '../../common/entity';
import { ImageEntity } from '../image/image.entity';
import { EmbedFio } from '../../common/embed/index';

@Entity()
export class ProfileEntity extends AEntityTimestamp {
  @Column(type => EmbedFio)
  name: EmbedFio;

  @Column('date')
  birthdate: Date;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 50 })
  country: string;

  @Column({ length: 15 })
  phone: string;

  @OneToOne(type => ImageEntity)
  @JoinColumn()
  photo: ImageEntity;
}
