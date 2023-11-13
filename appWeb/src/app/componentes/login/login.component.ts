import { Component } from '@angular/core';
import {currentUser } from '../control-vista/currentUser';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Credenciales } from '../modelo/Credenciales';
import { Usuario } from '../modelo/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
    usuario:Usuario={
      _idusuario: 0,
      _nombreusuario: '',
     _username: '',
      _clave: '',
      _idrol: 0
    };
    creenciales:Credenciales = {
      _username: '',
      _clave: ''
    };
    constructor(private router:Router,private services:UsuarioService){}

    login(){
      if(!this.creenciales._username  || !this.creenciales._clave ) {
        console.error('Las credenciales están vacías');
      }
      else{
        //llamar al service
        this.services.loginUsuario(this.creenciales).subscribe(
          (res: any) => {
            console.log(res);
            this.usuario = res;
            currentUser.setCurrentId(this.usuario._idusuario);
            this.verificarVista(this.usuario._idusuario,this.usuario._idrol);
          },
          err => console.log(err)
        );
      }
    }

    verificarVista(rol:number,id:number){
      currentUser.setCurrentRol(rol);
      if(rol == 1){
        
        this.router.navigate(['/listarProducto']);
      }
      else{
        this.router.navigate(['/MainCliente']);
      }
    }

}
