import { Routes } from '@angular/router';
import { CadastrarCasaComponent } from './cadastrar-casa/cadastrar-casa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemandaComponent } from './demanda/demanda.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-casa', component: CadastrarCasaComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'demanda', component: DemandaComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
