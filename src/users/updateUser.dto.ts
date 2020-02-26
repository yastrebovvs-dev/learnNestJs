import { IsEmail, Length, MaxLength } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto {

    @ApiProperty()
    @IsEmail()
    @MaxLength(255)
    login: string;

    @ApiProperty()
    @Length(3, 255, )
    password: string;

}