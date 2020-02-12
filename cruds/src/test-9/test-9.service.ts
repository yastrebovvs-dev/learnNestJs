import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {InjectRepository} from "@nestjs/typeorm";

import {Test9Entity} from "../entities/test-9.entity";

@Injectable()
export class Test9Service extends TypeOrmCrudService<Test9Entity> {
    constructor(@InjectRepository(Test9Entity) repo) {
        super(repo);
    }
}
