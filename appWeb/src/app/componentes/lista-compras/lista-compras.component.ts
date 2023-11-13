import { Component } from '@angular/core';
import { ProductoCompra } from '../modelo/ProductoCompra';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent {
  productos:ProductoCompra[] = [];
  constructor(private router:Router,private services:ProductoService,private activeRouter: ActivatedRoute){}
  ngOnInit(): void {
    const params = this.activeRouter.snapshot.params; //sirve para eliminar 
    this.getProductosCompra();
  }
  getProductosCompra(){
    this.services.listarProductosCompra(11).subscribe(
      (res: any) => {
        console.log(res);
        this.productos = res;
      },
      err => console.log(err)
    );
  }
  eliminarLista(){
    this.services.eliminarLista(11).subscribe(
      (res: any) => {
        console.log(res);
        console.log('siuuu');
      },
      err => console.log(err)
    );
  }
}
