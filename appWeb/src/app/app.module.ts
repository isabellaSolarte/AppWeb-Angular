import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule}from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './componentes/login/login.component';
import { ClienteMainComponent } from './componentes/cliente-main/cliente-main.component';
import { ListaComprasComponent } from './componentes/lista-compras/lista-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductoComponent,
    NavigationComponent,
    LoginComponent,
    ClienteMainComponent,
    ListaComprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
