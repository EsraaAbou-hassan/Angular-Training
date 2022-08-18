import { Component} from '@angular/core';
import {LoginService} from 'src/app/Service/login.service';
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  hide = true;
  email:string='';
  password:string='';
  username:string='';
   constructor(private loginAuth:LoginService,firebase:AngularFireAuth) { }
    SignUp() {
    this.loginAuth.Register(this.email,this.password,this.username);
    this.loginAuth.username=this.username;
  
    this.email='';
    this.password='';
  }
 
}
