import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { GatoComponent } from './gato/gato.component';

// otros componentes...

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'expedientes', component: ExpedientesComponent },
  { path: 'gato', component: GatoComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
