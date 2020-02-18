import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Test1Controller } from './test-1.controller';
import { Test1Service } from './test-1.service';

import {Test1Entity} from "./test-1.entity";

@Module({
  controllers: [Test1Controller],
  providers: [Test1Service],
  imports: [
    TypeOrmModule.forFeature([Test1Entity])
  ]
})
export class Test1Module {}
