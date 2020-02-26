import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsDefined, IsEmail } from "class-validator";

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 255 })
    login: string;

    @Column({ length: 255 })
    password: string;

    @Column()
    uptime: number;
}