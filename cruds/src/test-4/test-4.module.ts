import { Module } from '@nestjs/common';
import { Test4Controller } from './test-4.controller';
import { Test4Service } from './test-4.service';
import {TypeOrmModule} from "@nestjs/typeorm";

import {Test4Entity} from "../entities/test-4.entity";

@Module({
  controllers: [Test4Controller],
  providers: [Test4Service],
  imports: [
    TypeOrmModule.forFeature([Test4Entity])
  ]
})
export class Test4Module {}
