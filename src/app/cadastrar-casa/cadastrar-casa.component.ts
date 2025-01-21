import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CasaService } from '../services/casa.service';
import { Casa } from './casa.model';

@Component({
  selector: 'app-cadastrar-casa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar-casa.component.html',
  styleUrls: ['./cadastrar-casa.component.css']
})

export class CadastrarCasaComponent {
  casa: Casa = {
    id: 0,
    nome: '',
    descricao: '',
    horario: '',
    urlImagemPerfil: '',
    frete: '',
    email: '',
    contatoWhatsApp: '',
    senha: '',
    endereco: {
      id: 0,
      cep: '',
      nomeLugar: '',
      numero: ''
    }
  };

  constructor(private casaService: CasaService, private router: Router) {}
  
  onSubmit(){
    console.log('Formulário enviado:', this.casa);
    this.casaService.cadastrarCasa(this.casa).subscribe({
      next: (response) => {
        console.log('Casa cadastrada com sucesso:', response);
        this.router.navigate(['/login']);
      },

      error: (err) => {
        console.error('Erro ao cadastrar casa:', err);
      }
    }) ; 
  }

}
