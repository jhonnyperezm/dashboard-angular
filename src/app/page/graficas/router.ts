
import { Routes, RouterModule } from '@angular/router';
import { Grafica1Component } from './grafica1/grafica1.component';

const pagesRoutes: Routes = [

    { path: 'grafica', component: Grafica1Component },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);
