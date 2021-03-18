import { Body, Controller, Get, Post, Param, Patch, Delete} from '@nestjs/common';
import { Todo } from 'src/interfaces/todo.interface';
import { TodoDto } from './dto/todo.dto';
import { TodosService } from './todos.service';
import { TodoEntity } from './todo.entity';

//localhost:3000/todos
@Controller('todos')
export class TodosController {

    constructor(private readonly todoService: TodosService){

    }

    
    //async
    @Get()
    findAll(): Promise<TodoEntity[]>{
        console.log("okey");
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

    @Patch(':id')
    updateTodo(@Param('id') id: string, @Body() todo: TodoDto){
        return this.todoService.updateTodo(id, todo as Todo);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id:string){
        return this.todoService.delete(id);
    }
}
