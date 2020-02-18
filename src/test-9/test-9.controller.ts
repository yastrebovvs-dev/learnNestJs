import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {Test9Service} from "./test-9.service";
import {Test9Entity} from "./test-9.entity";

@Crud({ model: { type: Test9Entity } })
@Controller('test-9')
export class Test9Controller implements CrudController<Test9Entity>{
    constructor(public service: Test9Service){}
}
