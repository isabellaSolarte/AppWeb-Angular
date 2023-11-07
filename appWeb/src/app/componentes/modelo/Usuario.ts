import { Rol } from "./Rol";
export interface Usuario{
    _id: number;
    _nombre: string;
    _login: string;
    _password: string;
    _rol:Rol[];
    _correo: string;
}