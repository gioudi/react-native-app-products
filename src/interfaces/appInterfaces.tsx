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
