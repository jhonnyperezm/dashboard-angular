import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { CONFIGURACIONES_ROUTES } from './router';



@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    CONFIGURACIONES_ROUTES
  ]
})
export class ConfiguracionesModule { }
