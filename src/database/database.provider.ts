import { from } from "rxjs";
import {createConnection} from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection ({
                        type: 'mysql',
                        host: 'localhost',
                        port: 3306,
                        username: 'root',
                        password: '',
                        database: 'tuto_nestjs',
                        entities: [
                            __dirname + '/../**/*.entity{.ts,.js}',
                        ],
                        synchronize: true, //passer synchronize: false en produiduction sinon risque de perte de données!
        }),
    },
];