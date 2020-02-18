import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UsersEntity } from "./users.entity";
import {UserDto} from "./user.dto";

@Injectable()
export class UsersService extends TypeOrmCrudService<UsersEntity>{
    constructor(
        @InjectRepository(UsersEntity)
        private readonly rep: Repository<UsersEntity>) {
        super(rep)
    }
    async updateUser(id: string, user: UserDto){
        const { login, password } = user
        return this.rep.update(id, { login, password })
    }
}
