import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Importe o LoginComponent

// Definindo as rotas
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }  // Redireciona qualquer rota desconhecida para 'login'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura o roteamento no aplicativo
  exports: [RouterModule]  // Exporta o RouterModule para ser utilizado em outros módulos
})
export class AppRoutingModule {}
