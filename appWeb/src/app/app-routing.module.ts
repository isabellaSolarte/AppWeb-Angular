import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { LoginComponent } from './componentes/login/login.component';
import { ClienteMainComponent } from './componentes/cliente-main/cliente-main.component';
import { ListaComprasComponent } from './componentes/lista-compras/lista-compras.component';

const routes:Routes = [
  //rutas para la navegacion
  {path: 'listarProducto', component: ListarProductoComponent, canActivate: [authGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'MainCliente', component: ClienteMainComponent},
  {path: 'listaCompras/:id', component: ListaComprasComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
