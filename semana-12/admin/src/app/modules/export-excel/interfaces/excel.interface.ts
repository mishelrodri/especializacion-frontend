export interface IConsultaExcelTabla{
  tablaConsulta:ITablaConsulta[];
}

export interface ITablaConsulta{
  fechaConsulta:string;
  numConsultorio:string;
  especialidad:string;
  paciente:string;
  medico:string;
}
