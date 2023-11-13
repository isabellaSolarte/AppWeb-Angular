import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../modelo/Producto';
import { ListaCompras } from '../modelo/ListaCompras';
import { ListaAgregados } from '../modelo/ListaAgregados';
import { Router } from '@angular/router';
import { currentLista } from '../control-lista/currentLista';

@Component({
  selector: 'app-cliente-main',
  templateUrl: './cliente-main.component.html',
  styleUrls: ['./cliente-main.component.css']
})
export class ClienteMainComponent {
  productos:Producto[] = [];
  mostrarLista:boolean = false;
  mostrarCrearLista:boolean = true;
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
    this.services.crearListaProductos(11).subscribe(
      (res: any) => {
        console.log(res);
        //notificar la creación de la lista de productos

        currentLista.setMostrarLista(true);
        this.mostrarLista = true;
        currentLista.setMostrarCrearLista(false);
        this.mostrarCrearLista = false;
        this.lista = res;
      },
      err => console.log(err)
    );
  }
  agregarProductoLista(idProducto:number){
    this.agregarProducto._idproducto = idProducto;
    this.agregarProducto._idlista = this.lista._idlista;
    this.services.agregarProductoLista(this.agregarProducto).subscribe(
      (res: any) => {
        console.log(res);
      },
      err => console.log(err)
    );
  }
  eliminarLista(){
    this.services.eliminarLista(11).subscribe(
      (res: any) => {
        console.log(res);
        currentLista.setMostrarLista(false);
        this.mostrarLista = false;
        currentLista.setMostrarCrearLista(true);
        this.mostrarCrearLista = true;
      },
      err => console.log(err)
    );
  }
  irListaCompras(){
    this.route.navigate(['/listaCompras/'+this.lista._idlista]);
  }
}
