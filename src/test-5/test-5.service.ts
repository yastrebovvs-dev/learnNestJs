import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {InjectRepository} from "@nestjs/typeorm";

import {Test5Entity} from "./test-5.entity";

@Injectable()
export class Test5Service extends TypeOrmCrudService<Test5Entity>{
    constructor(@InjectRepository(Test5Entity) repo) {
        super(repo);
    }
}
