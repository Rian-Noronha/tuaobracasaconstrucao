import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../dashboard/cliente.model';
import { AuthService } from '../services/auth.service';
import { CasaService } from '../services/casa.service';
import { Demanda } from './demanda.model';

@Component({
  selector: 'app-demanda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demanda.component.html',
  styleUrls: ['./demanda.component.css']
})
export class DemandaComponent {

  emailCliente: string = '';
  cliente: Cliente = new Cliente();
  emailCasa: string = '';
  demandas: Demanda[] = [];

  constructor(private router: Router,  private casaService: CasaService, private authService: AuthService, private http: HttpClient) {
    const navigation = this.router.getCurrentNavigation();
    this.cliente = navigation?.extras.state?.['cliente'] || null;

    if (!this.cliente) {
      console.error("Nenhum objeto cliente foi passado.");
      this.router.navigate(['/dashboard']);
    }else{
      this.emailCliente = this.cliente.email;
    }
  }


  ngOnInit(): void {
    const emailUsuario = this.authService.pegarEmailUsuario();
    if (this.emailCliente && emailUsuario) {
      this.emailCasa = emailUsuario;
      this.listarDemandasCliente(this.emailCliente, this.emailCasa);
    }
  }



  listarDemandasCliente(emailCliente: string, emailCasa: string): void {
    this.casaService.listarDemandasCliente(this.emailCliente, this.emailCasa).subscribe({
      next: (demandas) => {
        this.demandas = demandas;
        console.log('Demandas:', demandas);
      },
      error: (error) => {
        console.error('Erro ao listar demandas:', error);
      }
    });
  }

  baixarOrcamento(url: string) {
    window.open(url, '_blank');
  }

}

