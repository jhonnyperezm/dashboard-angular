import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SidebarService } from './shared/sidebar/sidebar.service';
import { RutaService } from './shared/sidebar/ruta.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    RutaService
  ]
})
export class ServicesModule { }
