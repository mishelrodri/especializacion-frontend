import { Biblioteca } from "./biblioteca.models";
export class Libro {
  constructor(
    public nombre: string,
    public biblioteca?: Biblioteca,
    public id?: number
  ) {}
}
