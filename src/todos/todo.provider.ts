import { Connection, Repository } from 'typeorm';
import { TodoEntity} from './todo.entity';

export const TodoProviders = [
    {
        provide: 'DOTO_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(TodoEntity),
        inject: ['DATABASE_CONNECTION'],
    },
];