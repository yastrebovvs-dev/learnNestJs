import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersEntity } from "./users.entity";


@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [
        TypeOrmModule.forFeature([UsersEntity])
    ]
})
export class UsersModule {}
