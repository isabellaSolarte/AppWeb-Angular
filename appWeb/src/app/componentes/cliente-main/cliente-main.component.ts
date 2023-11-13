import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../modelo/Producto';

@Component({
  selector: 'app-cliente-main',
  templateUrl: './cliente-main.component.html',
  styleUrls: ['./cliente-main.component.css']
})
export class ClienteMainComponent {
  productos:Producto[] = [];
  imagenes: string[] = [
    'assets/fondo.jpg',
    'assets/imagen1.jpg',
    'assets/imagen2.jpg',
    'assets/imagen3.jpg',
    'assets/imagen4.jpg',
    'assets/imagen5.jpg',
    'assets/imagen6.jpg',
  ];
  constructor(private services:ProductoService){}
  ngOnInit(): void{
    this.listarProductos();
  }
  obtenerRutaImagenAleatoria(): string {
    const indiceAleatorio = Math.floor(Math.random() * this.imagenes.length);
    return this.imagenes[indiceAleatorio];
  } 
  listarProductos(){
    this.services.getProductos().subscribe(
      (res: any) => {
        console.log(res);
        this.productos = res;
      },
      err => console.log(err)
    );
  }
}
