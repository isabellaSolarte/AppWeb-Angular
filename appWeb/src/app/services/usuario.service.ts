import { Injectable } from '@angular/core';
import { Credenciales } from '../componentes/modelo/Credenciales';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URI = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }

  loginUsuario(credenciales: Credenciales){
    return this.http.post(`${this.API_URI}/usuario/login/`,credenciales);
  }

}
