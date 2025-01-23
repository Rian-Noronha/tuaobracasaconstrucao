import { Routes } from '@angular/router';
import { CadastrarCasaComponent } from './cadastrar-casa/cadastrar-casa.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-casa', component: CadastrarCasaComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
