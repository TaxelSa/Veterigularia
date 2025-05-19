import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ExpedientesComponent } from './expedientes/expedientes.component';
// otros componentes...

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'expendientes', component: ExpedientesComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
