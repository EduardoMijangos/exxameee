export class Book{
    id: number;
    autorid: number;
    title: string;
    sinopsis: string;
    nump: number;
    autor: string;
    clasificacion: string;

    constructor(data: Partial <Book>){
        Object.assign(this, data);
    }

}

