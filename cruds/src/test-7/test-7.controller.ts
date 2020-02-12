import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {Test7Entity} from "../entities/test-7.entity";
import {Test7Service} from "./test-7.service";

@Crud({ model: { type: Test7Entity } })
@Controller('test-7')
export class Test7Controller implements CrudController<Test7Entity>{
    constructor(public service: Test7Service){}
}
