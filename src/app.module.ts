import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/entities/book.entity';
import { Autor } from './autor/entities/autor.entity';
import { AutorModule } from './autor/autor.module';
import { BookModule } from './book/book.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mijangos',
      database: 'examen2P',
      entities: [Book, Autor], // Registra manualmente las entidades aquí
      synchronize: true,
    }),
    AutorModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
