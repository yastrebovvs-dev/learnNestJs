import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Test1Entity } from "../entities/test-1.entity";

@Injectable()
export class Test1Service extends TypeOrmCrudService<Test1Entity>{
    constructor(@InjectRepository(Test1Entity) repo) {
        super(repo);
    }
}
