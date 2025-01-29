import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Casa } from '../cadastrar-casa/casa.model';
import { Cliente } from '../dashboard/cliente.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  private apiUrl = 'http://localhost:8080/api/auth/register';
  private apiUrlClientesVinculados = 'http://localhost:8080/api/casaconstrucao/clientesvinculados/email';
  constructor(private http: HttpClient, private authService: AuthService) {}

  cadastrarCasa(casa: Casa): Observable<Casa>{
    return this.http.post<Casa>(this.apiUrl, casa);
  }


  listarClientesVinculados(email: string): Observable<Cliente[]> {
    const token = this.authService.pegarToken(); 
    return this.http.get<Cliente[]>(`${this.apiUrlClientesVinculados}/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
