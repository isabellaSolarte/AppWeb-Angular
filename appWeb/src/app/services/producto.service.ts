import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  API_URI = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }
  getProductos(){
    return this.http.get(`${this.API_URI}/productos`);
  }
}
