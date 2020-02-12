import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {Test2Entity} from "../entities/test-2.entity";
import {Test2Service} from "./test-2.service";

@Crud({ model: { type: Test2Entity } })
@Controller('test-2')
export class Test2Controller implements CrudController<Test2Entity>{
    constructor(public service: Test2Service){}
}
