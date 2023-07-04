import { Book } from "src/book/entities/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('autor')
export class Autor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @OneToMany(()=> Book, (b)=> b.autor)
    book: Book;
}
