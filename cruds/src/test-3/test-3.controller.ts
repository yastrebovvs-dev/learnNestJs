import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import { Test3Entity } from './test-3.entity';
import { Test3Service } from './test-3.service';

@Crud({ model: { type: Test3Entity } })
@Controller('test-3')
export class Test3Controller implements CrudController<Test3Entity>{
    constructor(public service: Test3Service){}
}
