import { Module } from '@nestjs/common';
import { Test8Controller } from './test-8.controller';
import { Test8Service } from './test-8.service';
import {TypeOrmModule} from "@nestjs/typeorm";

import {Test8Entity} from "../entities/test-8.entity";

@Module({
  controllers: [Test8Controller],
  providers: [Test8Service],
  imports: [
    TypeOrmModule.forFeature([Test8Entity])
  ]
})
export class Test8Module {}
