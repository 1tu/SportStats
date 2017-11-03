import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class AEntityBase {
  @PrimaryGeneratedColumn()
  id: number;
}

