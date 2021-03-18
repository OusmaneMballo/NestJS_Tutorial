import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { Todo } from 'src/interfaces/todo.interface';
import { TodoDto } from './dto/todo.dto';
import { promises } from 'fs';

@Injectable()
export class TodosService {
   constructor(
       @InjectRepository(TodoEntity)
       private todoRepository: Repository<TodoEntity>,
   ){}

     findAll():Promise<TodoEntity[]>{
        return this.todoRepository.find();
      }

     todos: Todo[]=[
        {
            'id': 1,
            'title': 'Todos app',
            'description': 'Create Nest Todo App',
            'done': true
        },
        {
            'id': 2,
            'title': 'Bread',
            'description': 'Acheter du pain',
            'done': true
        },
        {
            'id': 3,
            'title': 'Menage',
            'description': 'Ranger la Chambre',
            'done': false
        },
    ];

   /* findAll(): Todo[]{
        return this.todos
    }*/

    create(todo: TodoDto){
        
        this.todos.push(todo as Todo);
    }

    findOnTodo(id: string){
        return this.todos.find(todo=>todo.id===Number(id));
    }

    updateTodo(id: string, todo: Todo){
        const todoUpdate=this.findOnTodo(id);
        if(!todoUpdate){
            return new NotFoundException('Oups... Todo non trouvé');
        }
        //Apply to granulary update a single proprety
        if(todo.hasOwnProperty('done')){
            todoUpdate.done=todo.done;
        }

        if(todo.title){
            todoUpdate.title=todo.title
        }

        if(todo.description){
            todoUpdate.description=todo.description;
        }

        const updateTodo=this.todos.map(t=>t.id !== +id ? t : todoUpdate);
        this.todos=[...updateTodo];
        return {updatedoto: 1, doto: todoUpdate};
    }

    delete(id: string){
        const nbrTodo=this.todos.length;

        this.todos=[...this.todos.filter(t=>t.id !== +id)];
        if(this.todos.length<nbrTodo){
            return {deletedTodo: 1, numberOfTodos: this.todos.length};
        }
        else{
            return {deletedTodo: 0, numberOfTodos: this.todos.length};
        }
    }
}
