import { IsString, IsNumber } from "@nestjs/class-validator";
import { Autor } from "src/autor/entities/autor.entity";

export class CreateBookDto {

    @IsString()
    title: string;

    @IsString()
    sinopsis: string

    @IsNumber()
    nump: number;

    @IsString()
    clasificacion: string

    autor: Autor
    autorId:number;

}
