import { Module } from '@nestjs/common';
import { Test5Controller } from './test-5.controller';
import { Test5Service } from './test-5.service';
import {TypeOrmModule} from "@nestjs/typeorm";

import {Test5Entity} from "./test-5.entity";

@Module({
  controllers: [Test5Controller],
  providers: [Test5Service],
  imports: [
    TypeOrmModule.forFeature([Test5Entity])
  ]
})
export class Test5Module {}
