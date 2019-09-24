import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './router';
import { MedicoComponent } from './medico/medico.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MedicoComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
