import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {Test1Entity} from "./test-1.entity";
import {Test1Service} from "./test-1.service";

@Crud({ model: { type: Test1Entity } })
@Controller('test-1')
export class Test1Controller implements CrudController<Test1Entity>{
    constructor(public service: Test1Service){}
}
