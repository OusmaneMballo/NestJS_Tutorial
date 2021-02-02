import { Controller, Get, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common';
import { version } from 'prettier';

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

    @Get('docs')
    @Redirect('https://docs.nestjs.com',302)
    getdocs(@Query('version') version){

        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
          }
        return ""
    }

    @Get(':id')
    findById(@Param() params): string{
        return `This action returns a #${params.id} cat`;
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`;
    }

}
