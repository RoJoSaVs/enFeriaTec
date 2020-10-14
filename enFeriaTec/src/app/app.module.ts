import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { VistaProductorComponent } from './vista-productor/vista-productor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VistaAdministradorComponent } from './vista-administrador/vista-administrador.component';
import { VistaPublicoComponent } from './vista-publico/vista-publico.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { GestionProductoresComponent } from './gestion-productores/gestion-productores.component';
import { FarmersComponent } from './farmers/farmers.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    VistaProductorComponent,
    NavbarComponent,
    VistaAdministradorComponent,
    VistaPublicoComponent,
    LoginFormComponent,
    ClientViewComponent,
    GestionProductoresComponent,
    FarmersComponent,
    SolicitudComponent,
    ClientesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
