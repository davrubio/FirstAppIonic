import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { UserModel } from '../models/UserModel';
import { IUserLogin } from '../models/IUserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class LoginPage implements OnInit {

  listUser: UserModel[] = [
    new UserModel('David', 'Rubio','dav.rubio@duocuc.cl',undefined, 'USUARIO', 'dav.rubio','dav123'),
    new UserModel('Jorge', 'Escobar','jo.escobar@duocuc.cl',undefined, 'ADMIN', 'jo.escobar','jorge123'),
    new UserModel('Nicolas', 'Caviedes','ni.caviedes@duocuc.cl',undefined, 'USUARIO', 'ni.caviedes','nico123'),
    new UserModel('Sergio', 'Plaza','serg.plaza@duocuc.cl',undefined, 'USUARIO', 'serg.plaza','sergio123'),
  ];

  userLoginModal: IUserLogin = {
    username: '',
    password: ''
  };

  constructor(private route: Router) { }

  ngOnInit() {
    this.userLoginModalRestart();
  }

  userLogin(userLoginInfo: IUserLogin): boolean{
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].username == userLoginInfo.username) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.username, this.userLoginModal.password);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }
        if(this.listUser[i].type == 'USUARIO'){
          let sendInfo = this.route.navigate(['/usuario'], userInfoSend);
          return true;
        }else {
          let sendInfo = this.route.navigate(['/admin'], userInfoSend);
        }
      }
    }
    this.userLoginModalRestart();
    return false;
  }

  userLoginModalRestart(): void{
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
  }

}
