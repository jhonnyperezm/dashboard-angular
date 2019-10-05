
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';

const pagesRoutes: Routes = [

    { path: 'Cliente', component: ClienteComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const CONFIGURACIONES_ROUTES = RouterModule.forChild(pagesRoutes);