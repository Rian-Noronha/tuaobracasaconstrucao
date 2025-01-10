import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
    console.log('Usuário:', this.user);
    // Aqui você pode implementar a lógica de autenticação, como uma chamada à API.
  }
}

