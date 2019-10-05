import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PuntosComponent } from './puntos/puntos.component';
import { GESTOR_ROUTES } from './router';



@NgModule({
  declarations: [
    InicioComponent,
    PuntosComponent
  ],
  imports: [
    CommonModule,
    GESTOR_ROUTES
  ]
})
export class GestorModule { }
