import { Injectable } from '@nestjs/common';
import { Todo } from 'src/interfaces/todo.interface';

@Injectable()
export class TodosService {
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

    findAll(): Todo[]{
        return this.todos
    }

    create(todo: Todo){
        
        this.todos.push(todo);
    }
}
