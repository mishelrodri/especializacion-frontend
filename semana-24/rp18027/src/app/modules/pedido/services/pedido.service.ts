import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente, Consulta, Pedido, PedidoResponse } from '@pedido/interfaces/IPedido.interface';
import { environment } from '../../../../environments/environment';
import { FormGroup } from '@angular/forms';
interface IConsulta{
  data:number[]
}
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private http = inject(HttpClient);
  url = `${environment.ApiUrl}/pedido`;
  listPedidos: Pedido[] = [];
  listConsulta: Consulta[] = [];
  listClientes: Cliente[] = [];
  isLoading = false;
  arreglo:number[]=[];


  datos: { data: number[] }[] = [{ data: [] }];


  pedidosResponse: PedidoResponse = {
    content: [],
    pageable: {
      sort: {
        empty: true,
        unsorted: true,
        sorted: true,
      },
      offset: 0,
      pageSize: 0,
      pageNumber: 0,
      paged: true,
      unpaged: true,
    },
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number: 0,
    sort: {
      empty: true,
      unsorted: true,
      sorted: true,
    },
    empty: true,
    first: true,
    numberOfElements: 0,
  };

  labels:any[]=[];


  getPedidosbyPage(page: number) {
    this.isLoading = false;
    this.http.get<PedidoResponse>(`${this.url}?page=${page}&size=5`).subscribe((data) => {
      this.pedidosResponse = data;

      this.isLoading = true;
    })
  }

  getPedidos() {
    this.isLoading = false;
    this.http.get<PedidoResponse>(`${this.url}?page=0&size=5`).subscribe((data) => {
      this.pedidosResponse = data;

      this.isLoading = true;
    })
  }

  getAllPedidos() {
    this.http.get<Pedido[]>(`${this.url}/all-pedidos`).subscribe((data) => {
      this.listPedidos = data;
      this.isLoading = true;
    })

  }

  getConsulta() {
    this.http.get<Consulta[]>(`${this.url}/consulta`).subscribe((data) => {
      this.listConsulta = data;
      this.datos= [{ data: [] }];
      this.labels=[];
      this.listConsulta.forEach((item)=>{
        this.datos[0].data.push(item.cantidad)
        this.labels.push(item.nombreCliente);
      })

      console.log(JSON.stringify(this.datos));


    })

  }

  getClientes() {
    this.http.get<Cliente[]>(`${this.url}/clientes`).subscribe((data) => {
      this.listClientes = data;
    })
  }

  crearPedido(pedido: FormGroup) {
    return this.http.post(`${this.url}`, pedido);
  }

  editarPedido(idPedido: number, pedido: FormGroup) {
    return this.http.put(`${this.url}/${idPedido}`, pedido);
  }

  eliminarPedido(idPedido: number) {
    return this.http.delete(`${this.url}/${idPedido}`);
  }



}
