import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { GraficasComponent } from './page/graficas/graficas.component';
import { RutasGuard } from './services/guard/rutas.guard';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: PagesComponent,
    
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: '',
    component: GraficasComponent,
    canLoad: [RutasGuard],
    loadChildren: './page/graficas/graficas.module#GraficasModule'
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
