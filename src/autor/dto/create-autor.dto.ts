import { IsString, IsNumber } from "@nestjs/class-validator";
import { Book } from "src/book/book.model";


export class CreateAutorDto {

    @IsString()
    name: string;

    book:Book
    title:string;

}
