import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { Book } from 'src/book/book.model';
import { Autor } from './entities/autor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()


export class AutorService {

  constructor(
    @InjectRepository(Book) private bookRepository: Repository <Book>,
    @InjectRepository(Autor) private autorRepository: Repository <Autor>
  ){}
   async create(createAutor: CreateAutorDto) {
    const { name, title } = createAutor
    // Crear una nueva instancia de Autor
    const autor = new Autor();
    autor.name = name;
    // Guardar el autor en la base de datos
    await this.autorRepository.save(autor);

    return autor;
  }


  findAll() {
    const autors = this.autorRepository.find();
    return autors;
  }

   async findOne(id: number) {
    const autor = await this.autorRepository.findOne({relations:['title'],
    where:{id}});
    if (!autor) {throw new BadRequestException("Autor no encontrado")};
    return autor;  }

  update(id: number, updateAutorDto: UpdateAutorDto) {
    return `This action updates a #${id} autor`;
  }

  remove(id: number) {
    return `This action removes a #${id} autor`;
  }
}
