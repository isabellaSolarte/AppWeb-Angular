import { Component } from '@angular/core';
import {currentUser } from '../control-vista/currentUser';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user:string = '';
    password:string = '';
    constructor(private router:Router,private services:UsuarioService){}

    login(){
      if(!this.user  || !this.password ) {
        console.error('Las credenciales están vacías');
      }
      else{
        //llamar al service
        currentUser.setCurrentId(0);
        currentUser.setCurrentRol(0);
        this.verificarVista(0,0);
      }
    }
    login1(){
      currentUser.setCurrentRol(0);
      this.router.navigate(['/listarProducto']);
    }
    verificarVista(rol:number,id:number){
      if(rol == 1){
        this.router.navigate(['/listarProducto']);
      }
      else{
        this.router.navigate(['']);
      }
    }

}
