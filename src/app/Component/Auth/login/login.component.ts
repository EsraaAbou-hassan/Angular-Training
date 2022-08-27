import { Component} from '@angular/core';
import {LoginService} from 'src/app/Service/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  hide=true;
 email:string='';
 password:string='';

  constructor(private loginAuth:LoginService) { }


  login() {
    this.loginAuth.login(this.email,this.password);
    this.email='';
    this.password='';
 }
   Loginwithgoogle() {
    this.loginAuth.googleLogin();

    this.email='';
    this.password='';
  }



}
