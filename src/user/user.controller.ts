import { Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ){}
    @Get()
     async getMany(){
      return await this.userService.getMany();
    }

    @Get(':id')
    getOne(){}
    
    @Post()
    createOne(){}

    @Put(':id')
    editOne(){}

    @Delete(':id')
    deleteOne(){}

}
