import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PAGE_ROUTES } from './router';



@NgModule({
  declarations: [Grafica1Component],
  imports: [
    CommonModule,
    PAGE_ROUTES
  ]
})
export class GraficasModule { }
