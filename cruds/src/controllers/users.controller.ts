import {Controller, Get} from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { UsersEntity } from '../entities/users.entity';
import { UsersService } from "../services/users.service";
import {EntityManager, Repository} from "typeorm";

@Crud({ model: { type: UsersEntity } })
@Controller('users')
export class UsersController implements CrudController<UsersEntity>{
    constructor(public service: UsersService){}
}
