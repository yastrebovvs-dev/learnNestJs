import { Column, PrimaryGeneratedColumn } from "typeorm";
import { IsDefined, IsEmail } from "class-validator";

export class UserDto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsEmail()
    @Column({ unique: true, length: 255 })
    login: string;

    @IsDefined()
    @Column({ length: 255 })
    password: string;

    @Column({ length: 255, update: false })
    uptime: number;
}