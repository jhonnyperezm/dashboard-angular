import {Injectable} from '@angular/core';
import {CanLoad} from '@angular/router';
import {RutaService} from '../shared/sidebar/ruta.service';

@Injectable({
  providedIn: 'root'
})
export class RutasGuard implements CanLoad {
  numero = 3;

  constructor() {
  }

  canLoad() {
    if (this.numero === 2) {
      console.log('paso cand');
      return true;
    } else {
      console.log('bloqueado');
      return false;

    }
  }
}
