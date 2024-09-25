import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  Usuario: string = '';
  Contrasena: string = '';

  constructor(private router: Router) {}

  login() {
    const user = 'zzz';
    const password = 'zzz';

    if (this.Usuario === user && this.Contrasena === password) {
      this.router.navigate(['/home']);
    } else {
      alert('Datos incorrectos');
    }
  }
}
