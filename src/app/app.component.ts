import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './Service/login.service';
import {UserService} from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router,private userService:UserService,private auth:LoginService) {
    auth.user$.subscribe(user=>{
          if(!user) return;

          this.userService.save(user,auth.username);
          let url=localStorage.getItem('returnUrl');
          if(!url) return;
          localStorage.removeItem('returnUrl');
          this.router.navigate( [url]);
          
        
       
      
    })


  }
}
