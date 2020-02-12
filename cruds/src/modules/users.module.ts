import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersService } from '../services/users.service';
import { UsersController } from '../controllers/users.controller';
import { UsersEntity } from "../entities/users.entity";


@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [
        TypeOrmModule.forFeature([UsersEntity])
    ]
})
export class UsersModule {}
