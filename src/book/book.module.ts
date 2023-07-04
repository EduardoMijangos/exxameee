import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from 'src/autor/entities/autor.entity';
import { PassportModule } from '@nestjs/passport';
import { Book } from './entities/book.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Book, Autor]),
],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
