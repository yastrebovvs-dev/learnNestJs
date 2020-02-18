import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {Test8Entity} from "./test-8.entity";
import {Test8Service} from "./test-8.service";

@Crud({ model: { type: Test8Entity } })
@Controller('test-8')
export class Test8Controller implements CrudController<Test8Entity>{
    constructor(public service: Test8Service){}
}
