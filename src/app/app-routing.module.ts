import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { GraficasComponent } from './page/graficas/graficas.component';
import { RutasGuard } from './services/guard/rutas.guard';
import { ConfiguracionesComponent } from './pages/configuraciones/configuraciones.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { GestorComponent } from './pages/gestor/gestor.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    component: ConfiguracionesComponent,
    loadChildren: () => import('./pages/configuraciones/configuraciones.module').then(m => m.ConfiguracionesModule)
  },
  {
    path: 'Compras',
    component: ComprasComponent,
    loadChildren: () => import('./pages/compras/compras.module').then(m => m.ComprasModule)
  },
  {
    path: 'gestor',
    component: GestorComponent,
    loadChildren: () => import('./pages/gestor/gestor.module').then(m => m.GestorModule)
  },
  {
    path: '',
    component: GraficasComponent,
    canLoad: [RutasGuard],
    loadChildren: () => import('./page/graficas/graficas.module').then(m => m.GraficasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
