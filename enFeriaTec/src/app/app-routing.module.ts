import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { VistaProductorComponent } from './vista-productor/vista-productor.component';
import { VistaAdministradorComponent } from './vista-administrador/vista-administrador.component';
import { VistaPublicoComponent } from './vista-publico/vista-publico.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { GestionProductoresComponent } from './gestion-productores/gestion-productores.component';
import { FarmersComponent } from './farmers/farmers.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'productor', component: VistaProductorComponent},
  { path: 'administrador', component: VistaAdministradorComponent},
  { path: 'gestionproductores', component: GestionProductoresComponent},
  { path: 'productores', component: FarmersComponent},
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
