import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  constructor(private router:Router){

  }
   navegar(){
      this.router.navigate(['/listarProducto']);
   }
}
