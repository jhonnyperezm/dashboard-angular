import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraComponent } from './compra/compra.component';
import { COMPRAS_ROUTES } from './router';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { IngresarcompraComponent } from './ingresarcompra/ingresarcompra.component';



@NgModule({
  declarations: [
    CompraComponent,
    DevolucionesComponent,
    IngresarcompraComponent
  ],
  imports: [
    CommonModule,
    COMPRAS_ROUTES
  ]
})
export class ComprasModule { }
