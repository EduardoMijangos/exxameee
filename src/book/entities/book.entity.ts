import { Autor } from "src/autor/entities/autor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('book')
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    title: string;

    @Column('text')
    sinopsis: string;

    @Column('int', {nullable: true})
    nump: number;

    @Column('text')
    clasificacion: string;

    @ManyToOne(()=> Autor, (a) => a.book)
    autor:Autor;

}
