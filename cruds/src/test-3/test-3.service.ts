import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {InjectRepository} from "@nestjs/typeorm";

import {Test3Entity} from "../entities/test-3.entity";


@Injectable()
export class Test3Service extends TypeOrmCrudService<Test3Entity>{
    constructor(@InjectRepository(Test3Entity) repo) {
        super(repo);
    }
}
