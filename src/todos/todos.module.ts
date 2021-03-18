import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController} from './todos.controller';
import { TodosService } from './todos.service';
import { TodoEntity } from './todo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TodoEntity])],
    providers: [TodosService],
    controllers: [TodosController],
})
export class TodosModule {}
