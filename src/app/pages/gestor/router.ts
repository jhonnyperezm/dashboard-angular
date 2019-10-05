import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PuntosComponent } from './puntos/puntos.component';


const gestorRoutes: Routes = [

    { path: 'inicio', component: InicioComponent },
    { path: 'puntos', component: PuntosComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const GESTOR_ROUTES = RouterModule.forChild(gestorRoutes);