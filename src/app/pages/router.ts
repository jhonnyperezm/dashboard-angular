import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MedicoComponent } from './medico/medico.component';

const pagesRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'medicos', component: MedicoComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);