import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { VistaProductorComponent } from './vista-productor/vista-productor.component';
import { VistaAdministradorComponent } from './vista-administrador/vista-administrador.component';
import { VistaPublicoComponent } from './vista-publico/vista-publico.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { GestionProductoresComponent } from './gestion-productores/gestion-productores.component';
import { FarmersComponent } from './farmers/farmers.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { SolicitudclientesComponent } from './solicitudclientes/solicitudclientes.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'productor', component: VistaProductorComponent},
  { path: 'administrador', component: VistaAdministradorComponent},
  { path: 'client-view', component: ClientViewComponent},
  { path: 'gestionproductores', component: GestionProductoresComponent},
  { path: 'productores', component: FarmersComponent},
  { path: 'productos', component: ProductsComponent},
  { path: 'solicitud', component: SolicitudComponent},
  { path: 'gestion-clientes', component: GestionClientesComponent},
  { path: 'solicitudclientes', component: SolicitudclientesComponent},
  { path: 'afiliaciones-pendientes', component: ClientsComponent},
  { path: 'publico', component: VistaPublicoComponent,
    children: [
      { path: 'form', component: LoginFormComponent, },     
    ]},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
