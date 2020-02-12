import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity('test6')
export class Test6Entity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ readonly: true, unique: true, length: 255 })
    login: string;

    @Exclude()
    @Column({ length: 255 })
    password: string;

    @Column('int')
    uptime: number;
}