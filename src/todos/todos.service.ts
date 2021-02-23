import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
     todos=[
        {
            'id': 1,
            'title': 'Todos app',
            'description': 'Create Nest Todo App'
        },
        {
            'id': 2,
            'title': 'Bread',
            'description': 'Acheter du pain'
        },
        {
            'id': 3,
            'title': 'Menage',
            'description': 'Ranger la Chambre'
        },
    ];

    findAll(): any[]{
        return this.todos
    }
}
