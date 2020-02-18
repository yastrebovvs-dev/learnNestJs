import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {InjectRepository} from "@nestjs/typeorm";

import {Test2Entity} from "./test-2.entity";

@Injectable()
export class Test2Service extends TypeOrmCrudService<Test2Entity>{
    constructor(@InjectRepository(Test2Entity) repo) {
        super(repo);
    }
}
