import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';


const routes:Routes = [
  //rutas para la navegacion
  {path: 'crearProducto', component: CrearProductoComponent},
  {path: 'listarProducto', component: ListarProductoComponent},
  {path: 'editarProducto', component: EditarProductoComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
