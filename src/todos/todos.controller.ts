import { Body, Controller, Get, Post} from '@nestjs/common';
import { Todo } from 'src/interfaces/todo.interface';
import { TodosService } from './todos.service';

//localhost:3000/todos
@Controller('todos')
export class TodosController {

    constructor(private readonly todoService: TodosService){

    }

    @Get()
    findAll(): Todo[]{
        return this.todoService.findAll();
    }

    @Post()
    createTodo(@Body() newTodo: Todo){
        
    }
}
