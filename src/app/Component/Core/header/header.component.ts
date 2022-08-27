import { Component,OnInit,Input} from '@angular/core';
import {LoginService} from 'src/app/Service/login.service';
import { IUser} from 'src/app/Model/user';
import { ShoppingCart} from 'src/app/Model/shopping-cart';
import { Observable} from 'rxjs';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { UserService } from 'src/app/Service/user.service';
import { ProductService } from 'src/app/Service/product.service';
import { IProduct } from 'src/app/Model/product';
import { Router} from '@angular/router';

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
searchKey:string;

  constructor(private Auth:LoginService,private cartService:ShoppingCartService
  ,private router:Router) {
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
filter(){
  this.router.navigate(['home'],{queryParams:{searchKey:this.searchKey}});


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
