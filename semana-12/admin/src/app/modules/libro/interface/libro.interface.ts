export interface Libro {

  id: number;
  nombre: string;
  biblioteca: Biblioteca;
}

export interface Biblioteca {
  id: number;
  nombre?: string;
}
