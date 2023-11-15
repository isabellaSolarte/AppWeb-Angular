import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaAgregados } from '../componentes/modelo/ListaAgregados';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  API_URI = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }
  getProductos(){
    return this.http.get(`${this.API_URI}/productos`);
  }
  crearListaProductos(idUser:number){
    return this.http.post(`${this.API_URI}/compras/${idUser}`, {idUser});
  }
  agregarProductoLista(lista:ListaAgregados){
    return this.http.post(`${this.API_URI}/productosList`,lista);
  }
  listarProductosCompra(idUser:number){
    return this.http.get(`${this.API_URI}/productosList/${idUser}`);
  }
  eliminarLista(idUser:number): Observable<any>{
    return this.http.delete(`${this.API_URI}/compras/${idUser}`);
  }
  crearLista(idUser:number): Observable<any>{
    return this.http.post(`${this.API_URI}/compras/${idUser}`, {idUser});
  }
}
