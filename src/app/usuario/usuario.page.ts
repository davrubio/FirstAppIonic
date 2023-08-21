import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from '../models/UserModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UsuarioPage implements OnInit {

  userInfoReceived: UserModel | undefined;
  idUserHtmlRouterLink: any;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    //Si quiero obtener un valor por url usando routerLink
    this.idUserHtmlRouterLink = this.activatedRouter.snapshot.params['id'];
    //Obteniendo el ID podria buscar el algun arreglo o BD el usuario con el id
    console.log("valor obtenido desde URL: ", this.idUserHtmlRouterLink);
   }

  ngOnInit() {
  }

}
