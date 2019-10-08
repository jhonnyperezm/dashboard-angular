import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
 public menu: any = [
    {
      permiso: 1
    }, {
      permiso: 2
    }
  ];

  constructor() {
  }
}
