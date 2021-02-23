import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';

//localhost:3000/todos
@Controller('todos')
export class TodosController {

    constructor(private readonly todoService: TodosService){

    }

    @Get()
    findAll(): any[]{
        return this.todoService.findAll();
    }
}
