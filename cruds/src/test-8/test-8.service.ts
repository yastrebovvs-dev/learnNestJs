import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {InjectRepository} from "@nestjs/typeorm";

import {Test8Entity} from "../entities/test-8.entity";

@Injectable()
export class Test8Service extends TypeOrmCrudService<Test8Entity> {
    constructor(@InjectRepository(Test8Entity) repo) {
        super(repo);
    }
}