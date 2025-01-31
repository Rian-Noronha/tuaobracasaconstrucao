import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Casa } from '../cadastrar-casa/casa.model';
import { Cliente } from '../dashboard/cliente.model';
import { Demanda } from '../demanda/demanda.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  private apiUrl = 'http://localhost:8080/api/auth/register';
  private apiUrlClientesVinculados = 'http://localhost:8080/api/casaconstrucao/clientesvinculados/email';
  private apiUrlDemandasCliente = 'http://localhost:8080/api/casaconstrucao/demandasclientevinculadocasa/emailcliente';

  constructor(private http: HttpClient, private authService: AuthService) {}

  cadastrarCasa(casa: Casa): Observable<Casa>{
    return this.http.post<Casa>(this.apiUrl, casa);
  }


  listarClientesVinculados(email: string): Observable<Cliente[]> {
    const token = this.authService.pegarToken(); 
    const encodedEmail = encodeURIComponent(email);
    return this.http.get<Cliente[]>(`${this.apiUrlClientesVinculados}/${encodedEmail}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

listarDemandasCliente(emailCliente: string, emailCasa: string): Observable<Demanda[]> {
  const token = this.authService.pegarToken();
  const encodedEmailCliente = encodeURIComponent(emailCliente);
  const encodedEmailCasa = encodeURIComponent(emailCasa);

  return this.http.get<Demanda[]>(`${this.apiUrlDemandasCliente}/${encodedEmailCliente}/emailcasa/${encodedEmailCasa}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}



}
