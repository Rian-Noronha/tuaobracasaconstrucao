import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, senha: password }).pipe(
      tap(response => {
        this.salvarDados(response.token, email);
      })
    );
  }


  private salvarDados(token: string, email: string){
    localStorage.setItem('authToken', token);
    localStorage.setItem('userEmail', email);
  }

  pegarEmailUsuario() {
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem('userEmail');
    } else {
      return null;
    }
  }

  pegarToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
  }
  
}
