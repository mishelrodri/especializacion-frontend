export interface PedidoResponse {
  content: Pedido[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Pedido {
  id: number;
  fechaPedido: string;
  estado: false,
  cliente: Cliente
}

export interface Cliente {
  id: number;
  nombre: string;
  dui: string;
  email: string;
}
