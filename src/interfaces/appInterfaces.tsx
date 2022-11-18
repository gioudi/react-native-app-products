export interface LoginData {
  correo: string;
  password: string;
}
export interface RegisterData {
  nombre: string;
  correo: string;
  password: string;
}
export interface LoginResponse {
  usuario: User;
  token: string;
}

export interface User {
  rol: string;
  estado: boolean;
  google: boolean;
  nombre: string;
  correo: string;
  uid: string;
  img?: string;
}
export interface ProductsResponse {
  total: number;
  productos: Producto[];
}
export interface Producto {
  precio: number;
  _id: string;
  nombre: string;
  categoria: Categoria;
  usuario: Categoria;
  img?: string;
}

export interface Categoria {
  _id: string;
  nombre: string;
}
