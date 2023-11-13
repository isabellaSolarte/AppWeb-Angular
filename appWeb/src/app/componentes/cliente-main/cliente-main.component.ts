import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-main',
  templateUrl: './cliente-main.component.html',
  styleUrls: ['./cliente-main.component.css']
})
export class ClienteMainComponent {
  imagenes: string[] = [
    'assets/fondo.jpg',
    'assets/imagen1.jpg',
    'assets/imagen2.jpg',
    'assets/imagen3.jpg',
    'assets/imagen4.jpg',
    'assets/imagen5.jpg',
    'assets/imagen6.jpg',
  ];
  obtenerRutaImagenAleatoria(): string {
    const indiceAleatorio = Math.floor(Math.random() * this.imagenes.length);
    return this.imagenes[indiceAleatorio];
  } 
}
