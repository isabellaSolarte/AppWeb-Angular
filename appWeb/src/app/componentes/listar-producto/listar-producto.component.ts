import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {
  constructor(private router:Router){

  }
  irCrearProducto(){
    this.router.navigate(['/crearProducto']);
  }
  irEditar(){
    this.router.navigate(['/editarProducto']);
  }
}
