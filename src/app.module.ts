import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    TodosModule,
    
  ],
  controllers: [CatsController],
  providers: [AppService,],
})
export class AppModule {}
