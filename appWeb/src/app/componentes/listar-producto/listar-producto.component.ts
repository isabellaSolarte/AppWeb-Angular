import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../modelo/Producto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {
  productos:Producto[] = [];
  constructor(private router:Router,private services:ProductoService){}
  ngOnInit(): void {
    this.getProductos();
  }
  getProductos(){
    this.services.getProductos().subscribe(
      (res: any) => {
        console.log(res);
        this.productos = res;
      },
      err => console.log(err)
    );
  }
  irCrearProducto(){
    this.router.navigate(['/crearProducto']);
  }
  irEditar(){
    this.router.navigate(['/editarProducto']);
  }
}
