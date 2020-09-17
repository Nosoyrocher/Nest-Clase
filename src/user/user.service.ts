import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities';
import {InjectRepository} from '@nestjs/typeorm'
import { CreateUserDto } from './dtos';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        readonly userRepository: Repository<User>
        ){}

 async getMany(){
          await this.userRepository.find()
    }

  async getOne(id: number){
      const user = await this.userRepository.findOne(id);
     if(!user) throw new NotFoundException ('User doesnt exist')

     return user;
     }

 async createOne(dto: CreateUserDto){
     const newUser = this.userRepository.create(dto)
     return await this.userRepository.save(newUser)
     }
     
 async editOne(){}

 async deleteOne(){}

}
