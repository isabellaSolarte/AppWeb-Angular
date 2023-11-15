import { Component } from '@angular/core';
import { ProductoCompra } from '../modelo/ProductoCompra';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { currentUser } from '../control-vista/currentUser';
import { currentLista } from '../control-lista/currentLista';
@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent {
  productos:ProductoCompra[] = [];
  mensajeModal:string ='';
  mostrarModal = false;
  constructor(private router:Router,private services:ProductoService,private activeRouter: ActivatedRoute){}
  ngOnInit(): void {
    const params = this.activeRouter.snapshot.params; //sirve para eliminar 
    this.getProductosCompra();
  }
  getProductosCompra(){
    this.services.listarProductosCompra(currentUser.getCurrentId()).subscribe(
      (res: any) => {
        console.log(res);
        this.productos = res;
      },
      err => console.log(err)
    );
  }
   // Método para abrir el modal
  abrirModal() {
    this.mostrarModal = true;
  }
  crearLista(){
    if(this.productos.length != 0){
      this.services.crearLista(currentUser.getCurrentId()).subscribe(
        (res: any) => {
          console.log('siuuu');
          //se puede volver a crear una lista nueva
          currentLista.setMostrarLista(false);
          currentLista.setMostrarCrearLista(true);
          currentLista.setid(0);
          this.mensajeModal = 'Se ha creado su lista de compras  '
          this.mostrarModal = true;
        },
        err => console.log(err)
      );
    }  
  }
  // Método para cerrar el modal
  cerrarModal() {
    this.irMainPage();
  }
  irMainPage(){
    this.router.navigate(['/MainCliente']);
  }
  
}
