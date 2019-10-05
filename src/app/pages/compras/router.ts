import { Routes, RouterModule } from '@angular/router';
import { CompraComponent } from './compra/compra.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { IngresarcompraComponent } from './ingresarcompra/ingresarcompra.component';


const pagesRoutes: Routes = [

    { path: 'Compras', component: CompraComponent},
    { path: 'devoluciones', component: DevolucionesComponent },
    { path: 'ingresarcompra', component: IngresarcompraComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'prefix' }
];


export const COMPRAS_ROUTES = RouterModule.forChild(pagesRoutes);