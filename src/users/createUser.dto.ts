import { IsEmail, IsNotEmpty, IsNumber, Length, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        type: String,
        description: 'Email validation',
        required: true,
    })
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(255)
    login: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(3, 255, )
    password: string;

    @ApiProperty()
    @IsNumber()
    uptime: number;
}