import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {} 

  onSubmit() {
    console.log('Usuário:', this.user);
  }


  navigateToCadastroCasa() {
    this.router.navigate(['/cadastro-casa']);
  }

}

