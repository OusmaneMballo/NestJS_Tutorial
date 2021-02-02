import { Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    /*
        Code d'état
        Comme mentionné, le code d'état de réponse est toujours 200 par défaut, 
        sauf pour les demandes POST qui sont 201 . Nous pouvons facilement changer
        ce comportement en ajoutant le @HttpCode(...)décorateur au niveau du gestionnaire.
    */
   @HttpCode(204)
   @Post('create')
    create(): string{
        return "Cette fonction crée un objet chat"
    }


    @Get('list')
    findAll(): string{
        return "Cette fonction retourne la liste des chats"
    }
}
