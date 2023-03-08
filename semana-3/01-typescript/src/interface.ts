export interface ISumergible {
  tiempoBajoAgua: number;
  profundidadMaxima: number;
  mostrarInformacion(): void;
  agregar(): void;
  modificar(): void;
  borrar(): void;
  listarElementos(): void;
}
