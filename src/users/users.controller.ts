import {Body, Controller, HttpException, Param, Patch} from '@nestjs/common';
import {Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest} from '@nestjsx/crud';

import { UsersEntity } from './users.entity';
import { UsersService } from "./users.service";
import { CreateUserDto } from "./createUser.dto";
import { UpdateUserDto } from "./updateUser.dto";
import {ApiTags} from "@nestjs/swagger";


@Crud({
    model: {
        type: UsersEntity
    },
    dto: {
        create: CreateUserDto,
        update: UpdateUserDto
    }
})
@ApiTags('users')
@Controller('users')
export class UsersController implements CrudController<UsersEntity>{

    constructor(public service: UsersService){}

    // get base(): CrudController<UsersEntity> {
    //     return this;
    // }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //     this.service.updateUser(id, updateUserDto)
    // }

    // @Override('updateOneBase')
    // update(
    //     @ParsedRequest() req: CrudRequest,
    //     @ParsedBody() dto: UpdateUserDto
    // ) {
    //     return this.base.updateOneBase(req, dto)
    // }
}