import { CanActivateFn } from '@angular/router';
import { currentUser } from './componentes/control-vista/currentUser';
export const authGuard: CanActivateFn = (route, state) => {
  if ( currentUser.getCurrentRol() == 1) {
    return true; // Permitir acceso a la ruta
  } else {
    return false;
  }
};