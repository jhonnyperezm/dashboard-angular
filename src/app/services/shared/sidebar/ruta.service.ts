import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  menu: any = [
    {
      permiso: 1
    }
  ];

  constructor() { }
}
