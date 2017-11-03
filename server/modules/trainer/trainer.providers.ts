import { Connection, Repository } from 'typeorm';
import { TrainerEntity } from './trainer.entity';

export const trainerProviders = [
  {
    provide: 'TrainerRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(TrainerEntity),
    inject: ['DbConnectionToken'],
  },
];
