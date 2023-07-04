import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Like, Repository } from 'typeorm';
import { Autor } from 'src/autor/entities/autor.entity';

@Injectable()
export class BookService {

constructor(
  @InjectRepository(Book) private bookRepository: Repository <Book>,
  @InjectRepository(Autor) private autorRepository: Repository <Autor>
){}

async create(createBook: CreateBookDto) {
  const autor = await this.autorRepository.findOne({
    where:{
      id: createBook.autorId
    }
  });
  console.log(autor);
  const book= this.bookRepository.create({...createBook,
  autor: autor});
  await this.bookRepository.save(book);
  return book;
}
  findAll() {
    const books = this.bookRepository.find();
    return books;
  }

  async findOne(id: number) {
    const book = await this.bookRepository.findOne({relations:['autor'],
    where:{id}});
    if (!book) {throw new BadRequestException("Autor no encontrado")};
    return book;  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    this.bookRepository.delete(id);

    return `Elimninado el libro${id} book`;
  }

  async search(termino: string){
    const book = await this.bookRepository.find(
      {where:{title: Like(`%${termino}%`)}});
    return book;
  }
}
