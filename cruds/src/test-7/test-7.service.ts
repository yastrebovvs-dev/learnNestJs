import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {InjectRepository} from "@nestjs/typeorm";

import {Test7Entity} from "../entities/test-7.entity";

@Injectable()
export class Test7Service extends TypeOrmCrudService<Test7Entity> {
    constructor(@InjectRepository(Test7Entity) repo) {
        super(repo);
    }
}

