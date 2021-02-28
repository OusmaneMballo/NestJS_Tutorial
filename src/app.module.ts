import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TodosModule } from './todos/todos.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    TodosModule, 
    DatabaseModule,
  ],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
