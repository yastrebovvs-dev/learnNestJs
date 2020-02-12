import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UsersEntity } from "../entities/users.entity";

@Injectable()
export class UsersService extends TypeOrmCrudService<UsersEntity>{
    constructor(@InjectRepository(UsersEntity) usersRepository: Repository<UsersEntity>) {
        super(usersRepository);
    }
}
