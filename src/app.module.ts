import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TodosController} from './todos/todos.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    
  ],
  controllers: [AppController, CatsController, TodosController],
  providers: [AppService,],
})
export class AppModule {}
