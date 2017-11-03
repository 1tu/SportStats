import {
  Column, EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent
} from 'typeorm';
import { AEntityBase } from './index';

export abstract class AEntityTimestamp extends AEntityBase {
  @Column('timestamp')
  createdAt: Date;

  @Column('timestamp')
  updatedAt: Date;
}

@EventSubscriber()
export class TimestampSubscriber implements EntitySubscriberInterface<AEntityTimestamp> {
  beforeInsert(event: InsertEvent<AEntityTimestamp>) {
    event.entity.createdAt = new Date();
    event.entity.updatedAt = null;
  }

  beforeUpdate(event: UpdateEvent<AEntityTimestamp>) {
    event.entity.updatedAt = new Date();
    console.log('breakpoint');
  }
}
