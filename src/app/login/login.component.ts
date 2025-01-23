import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private authService: AuthService

  ) {} 

  onSubmit() {
    console.log('Usuário:', this.user);

    
    this.authService.login(this.user.email, this.user.password).subscribe({
      next: (response) => {
        console.log('Token:', response.token);
        
        localStorage.setItem('authToken', response.token);

        
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Erro no login:', err);
        alert('Erro ao fazer login');
      },
    });
  }


  navigateToCadastroCasa() {
    this.router.navigate(['/cadastro-casa']);
  }

}

