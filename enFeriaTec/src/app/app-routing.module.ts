import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { VistaProductorComponent } from './vista-productor/vista-productor.component';
import { VistaAdministradorComponent } from './vista-administrador/vista-administrador.component';
import { VistaPublicoComponent } from './vista-publico/vista-publico.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'productor', component: VistaProductorComponent},
  { path: 'administrador', component: VistaAdministradorComponent},
  { path: 'público', component: VistaPublicoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
