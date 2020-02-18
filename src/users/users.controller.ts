import {Body, Controller, Param, Patch, Put} from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { UsersEntity } from './users.entity';
import { UsersService } from "./users.service";
import { UserDto } from "./user.dto";

@Crud({ model: { type: UsersEntity } })
@Controller('users')
export class UsersController implements CrudController<UsersEntity>{
    constructor(public service: UsersService){}
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UserDto) {
        this.service.updateUser(id, updateUserDto)
        return `user #${id} updated`;
    }
}