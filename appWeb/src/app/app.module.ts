import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule}from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductoComponent,
    NavigationComponent,
    EditarProductoComponent
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
