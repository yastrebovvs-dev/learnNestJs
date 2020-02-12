import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {Test4Service} from "./test-4.service";
import {Test4Entity} from "../entities/test-4.entity";

@Crud({ model: { type: Test4Entity } })
@Controller('test-4')
export class Test4Controller implements CrudController<Test4Entity>{
    constructor(public service: Test4Service){}
}
