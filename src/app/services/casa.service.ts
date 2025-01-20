import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Casa } from '../cadastrar-casa/casa.model';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  private apiUrl = 'http://localhost:8080/api/auth/register';
  constructor(private http: HttpClient) {}

  cadastrarCasa(casa: Casa): Observable<Casa>{
    return this.http.post<Casa>(this.apiUrl, casa);
  }
}
