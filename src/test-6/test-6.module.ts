import { Module } from '@nestjs/common';
import { Test6Controller } from './test-6.controller';
import { Test6Service } from './test-6.service';
import {TypeOrmModule} from "@nestjs/typeorm";

import {Test6Entity} from "./test-6.entity";

@Module({
  controllers: [Test6Controller],
  providers: [Test6Service],
  imports: [
    TypeOrmModule.forFeature([Test6Entity])
  ]
})
export class Test6Module {}
