import { Routes } from '@angular/router';
import { CadastrarCasaComponent } from './cadastrar-casa/cadastrar-casa.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-casa', component: CadastrarCasaComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
