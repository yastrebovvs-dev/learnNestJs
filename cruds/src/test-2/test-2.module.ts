import { Module } from '@nestjs/common';
import { Test2Controller } from './test-2.controller';
import { Test2Service } from './test-2.service';
import {TypeOrmModule} from "@nestjs/typeorm";

import {Test2Entity} from "./test-2.entity";

@Module({
  controllers: [Test2Controller],
  providers: [Test2Service],
  imports: [
    TypeOrmModule.forFeature([Test2Entity])
  ]
})
export class Test2Module {}
