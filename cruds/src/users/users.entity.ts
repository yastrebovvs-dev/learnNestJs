import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsDefined, IsEmail } from "class-validator";

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @IsEmail()
    @Column({ unique: true, length: 255 })
    login: string;

    @IsDefined()
    @Column({ length: 255 })
    password: string;

    @Column()
    uptime: number;
}