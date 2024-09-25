import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {}

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async register() {
    if (!this.email || !this.username || !this.password) {
      await this.showAlert('Por favor, completa todos los campos.');
      return;
    }

    // Aquí puedes agregar el código para registrar al usuario
    console.log('Usuario registrado:', { email: this.email, username: this.username, password: this.password });
  }
}
