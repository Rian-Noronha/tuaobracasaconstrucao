import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demanda',
  standalone: true,
  imports: [],
  templateUrl: './demanda.component.html',
  styleUrls: ['./demanda.component.css']
})
export class DemandaComponent {

  emailCliente: string | null = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.emailCliente = navigation?.extras.state?.['emailCliente'] || null;

    if (!this.emailCliente) {
      console.error("Nenhum email de cliente foi passado.");
      this.router.navigate(['/dashboard']);
    }
  }

}

