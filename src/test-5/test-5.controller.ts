import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {Test5Service} from "./test-5.service";
import {Test5Entity} from "./test-5.entity";

@Crud({ model: { type: Test5Entity } })
@Controller('test-5')
export class Test5Controller implements CrudController<Test5Entity>{
    constructor(public service: Test5Service){}
}
