import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import { Test6Service } from './test-6.service';
import { Test6Entity } from './test-6.entity';

@Crud({ model: { type: Test6Entity } })
@Controller('test-6')
export class Test6Controller implements CrudController<Test6Entity>{
    constructor(public service: Test6Service){}
}
