import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CasaService } from '../services/casa.service';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  clientes: Cliente[] = [];
  emailCasa: string = '';
  logoUrl: string = '';


  constructor(private casaService: CasaService, private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    
    const emailUsuario = this.authService.pegarEmailUsuario();
    if(emailUsuario){
      this.emailCasa = emailUsuario;
      this.listarClientesVinculados();
    }else{
      console.error('Usuário não está logado ou email é inválido.');
    }

  }


  listarClientesVinculados(){
    this.casaService.listarClientesVinculados(this.emailCasa).subscribe({
      next:(clientes) => {
        this.clientes = clientes;
        console.log('Clientes vinculados:', clientes);
      },
      error: (err) => {
        console.error('Erro ao listar clientes vinculados:', err);
      }
    });
  }


  verOrcamentos(cliente: Cliente){
    this.router.navigate(['/demanda'], { state: { cliente: cliente } });
  } 


  

}
