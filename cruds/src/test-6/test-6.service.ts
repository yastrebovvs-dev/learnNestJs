import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {InjectRepository} from "@nestjs/typeorm";

import {Test6Entity} from "../entities/test-6.entity";

@Injectable()
export class Test6Service extends TypeOrmCrudService<Test6Entity> {
    constructor(@InjectRepository(Test6Entity) repo) {
        super(repo);
    }
}
