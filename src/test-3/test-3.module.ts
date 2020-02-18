import { Module } from '@nestjs/common';
import { Test3Controller } from './test-3.controller';
import { Test3Service } from './test-3.service';
import {TypeOrmModule} from "@nestjs/typeorm";

import {Test3Entity} from "./test-3.entity";

@Module({
  controllers: [Test3Controller],
  providers: [Test3Service],
  imports: [
    TypeOrmModule.forFeature([Test3Entity])
  ]
})
export class Test3Module {}
