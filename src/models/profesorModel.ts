import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Curso } from "./cursoModel";

@Entity('profesores')
export class Profesor extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dni: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email: string;

    @Column()
    profesion: string

    @Column()
    telefono: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Curso, (curso) => curso.profesor)
    cursos: Curso[]
}