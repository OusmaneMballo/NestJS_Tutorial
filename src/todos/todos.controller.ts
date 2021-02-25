import { Body, Controller, Get, Post, Param} from '@nestjs/common';
import { Todo } from 'src/interfaces/todo.interface';
import { TodoDto } from './dto/todo.dto';
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

    @Post('create')
    createTodo(@Body() newtodo: TodoDto){
        //console.log(newTodo);
        //this.createTodo(newTodo);
        this.todoService.create(newtodo);
    }

    @Get(':id')
    findOnTodo(@Param('id') id: string){
            return this.todoService.findOnTodo(id);
    }
}
