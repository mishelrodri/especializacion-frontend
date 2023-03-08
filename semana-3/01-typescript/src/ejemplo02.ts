class Medicamento {
  //atributos
  private codigo: number;
  private nombreGenerico: string;
  private fechaVencimiento: Date;
  //constructor
  constructor(codigo: number, nombreGenerico: string, fechaVencimiento: Date) {
    this.codigo = codigo;
    this.nombreGenerico = nombreGenerico;
    this.fechaVencimiento = fechaVencimiento;
  }

  getCodigo(): number {
    return this.codigo;
  }

  get nameGenerico(): string {
    return this.nombreGenerico;
  }

  getFechaVencimiento = () => {
    return this.fechaVencimiento;
  };

  static disponibilidadMedicamento() {
    return "Medicamento disponible";
  }
}

let medicamento = new Medicamento(1, "Acetaminofen", new Date("2023-3-8"));
console.log(`Codigo: ${medicamento.getCodigo()}`);
console.log(`Nombre: ${medicamento.nameGenerico}`);
const vencimiento = medicamento.getFechaVencimiento;
console.log(vencimiento());
console.log(`Disponibilidad : ${Medicamento.disponibilidadMedicamento()}`);
