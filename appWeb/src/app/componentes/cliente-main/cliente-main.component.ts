import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../modelo/Producto';
import { ListaCompras } from '../modelo/ListaCompras';
import { ListaAgregados } from '../modelo/ListaAgregados';
import { Router } from '@angular/router';
import { currentLista } from '../control-lista/currentLista';
import { currentUser } from '../control-vista/currentUser';

@Component({
  selector: 'app-cliente-main',
  templateUrl: './cliente-main.component.html',
  styleUrls: ['./cliente-main.component.css']
})
export class ClienteMainComponent {
  productos:Producto[] = [];
  mensajeModal:string ='';
  mostrarLista:boolean = false;
  mostrarCrearLista:boolean = true;
  mostrarModal = false;
  imagenes: string[] = [
    'assets/fondo.jpg',
    'assets/imagen1.jpg',
    'assets/imagen2.jpg',
    'assets/imagen3.jpg',
    'assets/imagen4.jpg',
    'assets/imagen5.jpg',
    'assets/imagen6.jpg',
  ];
  lista:ListaCompras = {
    _idusuario: 0,
    _idlista: 0,
    _nombreLista: '',
    _fechaLista: new Date()
  };
  agregarProducto:ListaAgregados = {
    _idlista: 0,
    _idproducto:0,
    _estado: '',
  }
  constructor(private services:ProductoService,private route:Router){}
  ngOnInit(): void{
    this.listarProductos();
    this.mostrarCrearLista = currentLista.getMostrarCrearLista();
    this.mostrarLista = currentLista.getMostrarLista();
  }
  obtenerRutaImagenAleatoria(): string {
    const indiceAleatorio = Math.floor(Math.random() * this.imagenes.length); //muestra aleatoriamente las imagenes
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
  crearLista(){
    this.services.crearListaProductos(currentUser.getCurrentId()).subscribe(
      (res: any) => {
        console.log(res);
        this.mensajeModal = 'Se ha creado la lista de compras     '
        this.abrirModal();
        currentLista.setMostrarLista(true);
        this.mostrarLista = true;
        currentLista.setMostrarCrearLista(false);
        this.mostrarCrearLista = false;
        this.lista = res;
        currentLista.setid(this.lista._idlista);
      },
      err => console.log(err)
    );
  }
  agregarProductoLista(idProducto:number){
    this.agregarProducto._idproducto = idProducto;
    this.agregarProducto._idlista = currentLista.getId();
    this.services.agregarProductoLista(this.agregarProducto).subscribe(
      (res: any) => {
        this.mensajeModal = 'Se ha agregado el producto a la lista   '
        this.abrirModal();
        console.log(res);
      },
      err => console.log(err)
    );
  }
  eliminarLista(){
    this.services.eliminarLista(currentUser.getCurrentId()).subscribe(
      (res: any) => {
        console.log(res);
        this.mensajeModal = 'Se ha eliminado la lista de compras   '
        this.abrirModal();
        currentLista.setMostrarLista(false);
        this.mostrarLista = false;
        currentLista.setMostrarCrearLista(true);
        this.mostrarCrearLista = true;
      },
      err => console.log(err)
    );
  }
  // Método para abrir el modal
  abrirModal() {
    this.mostrarModal = true;
  }
  // Método para cerrar el modal
  cerrarModal() {
    this.mostrarModal = false;
  }
  irListaCompras(){
    this.route.navigate(['/listaCompras/'+this.lista._idlista]);
  }
}
