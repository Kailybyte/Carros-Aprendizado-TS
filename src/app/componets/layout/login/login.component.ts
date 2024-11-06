import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {
  usuario!: string;
  senha!: string;

  // Injeção correta do Router
  private router = inject(Router);

  logar() {
    if (this.usuario === 'admin' && this.senha === 'admin') {
      this.router.navigate(['admin/carros']); 
    } else {
      alert('Usuário ou senha estão incorretos!');
    }
  }
}
