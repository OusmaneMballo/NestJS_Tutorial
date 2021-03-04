import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TodosController} from './todos/todos.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tuto_nestjs',
      entities: [],
      synchronize: true,
    }),
    
  ],
  controllers: [AppController, CatsController, TodosController],
  providers: [AppService,],
})
export class AppModule {}
