import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  constructor(private router:Router){}
  cancelar(){
    this.router.navigate(['listarProducto']);
  }
}
