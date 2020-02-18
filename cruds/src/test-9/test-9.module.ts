import { Module } from '@nestjs/common';
import { Test9Controller } from './test-9.controller';
import { Test9Service } from './test-9.service';
import {TypeOrmModule} from "@nestjs/typeorm";

import {Test9Entity} from "./test-9.entity";

@Module({
  controllers: [Test9Controller],
  providers: [Test9Service],
  imports: [
    TypeOrmModule.forFeature([Test9Entity])
  ]
})
export class Test9Module {}
