import { Module } from '@nestjs/common';
import { Test7Controller } from './test-7.controller';
import { Test7Service } from './test-7.service';
import {TypeOrmModule} from "@nestjs/typeorm";

import {Test7Entity} from "./test-7.entity";

@Module({
  controllers: [Test7Controller],
  providers: [Test7Service],
  imports: [
    TypeOrmModule.forFeature([Test7Entity])
  ]
})
export class Test7Module {}
