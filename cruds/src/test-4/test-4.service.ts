import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {InjectRepository} from "@nestjs/typeorm";

import {Test4Entity} from "../entities/test-4.entity";


@Injectable()
export class Test4Service extends TypeOrmCrudService<Test4Entity>{
    constructor(@InjectRepository(Test4Entity) repo) {
        super(repo);
    }
}
