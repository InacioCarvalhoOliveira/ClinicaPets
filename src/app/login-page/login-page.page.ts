import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage {

  email = 'inacio' ;
  password = 'inacio';

  constructor(
    private nav: NavController,
    private toast: ToastController
  ) { }


  ngOnInit() { }

  validate() {
    if (this.email == 'inacio' && this.password == 'inacio') {
      console.log('deu bom');
      this.nav.navigateForward('home');
    }
    this.showError();
  }
  private async showError(){
    let msg = 'dados incorretos';
    let display = await this.toast.create({
      duration : 3000,
      message : msg
    });
    display.present();
  }

}
