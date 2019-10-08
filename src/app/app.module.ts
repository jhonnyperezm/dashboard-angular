import { PipeModule } from './pipe/pipe.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { GraficasComponent } from './page/graficas/graficas.component';
import { ConfiguracionesComponent } from './pages/configuraciones/configuraciones.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { GestorComponent } from './pages/gestor/gestor.component';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    GraficasComponent,
    ConfiguracionesComponent,
    ComprasComponent,
    GestorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    SharedModule,
    PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
