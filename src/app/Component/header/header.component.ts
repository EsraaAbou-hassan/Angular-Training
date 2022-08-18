import { Component,OnInit} from '@angular/core';
import {LoginService} from 'src/app/Service/login.service';
import { IUser} from 'src/app/Model/user';
import { ShoppingCart} from 'src/app/Model/shopping-cart';
import { Observable} from 'rxjs';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  isOpen:boolean=false;
  user:IUser={name:'',email:'',isAdmin:false};
 userId;
cart$:Observable<ShoppingCart>;
  constructor(private Auth:LoginService,private cartService:ShoppingCartService,
    private UserAuth:UserService) {
  }
  async ngOnInit() {
    this.Auth.appUser$.subscribe(user=>{
      this.user=user;
    });
    this.Auth.user$.subscribe(user=>{
      this.userId=user.uid;
  }); 
  
    this.cart$=await this.cartService.getCart()
    

  }

  logout(){
    console.log(this.user);
    console.log(this.userId);

    this.Auth.logout();

  }
  isClicked(){
    this.isOpen=!this.isOpen;
    

  }
}
