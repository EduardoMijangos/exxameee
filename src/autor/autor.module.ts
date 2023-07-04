import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/book/book.model';
import { Autor } from './entities/autor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Book, Autor])],
  controllers: [AutorController],
  providers: [AutorService]
})
export class AutorModule {}
