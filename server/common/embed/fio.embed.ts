import { Entity, Column } from 'typeorm';

export class EmbedFio {
  @Column({ length: 30 })
  first: string;

  @Column({ length: 30 })
  second: string;

  @Column({ length: 30 })
  last: string;
}
