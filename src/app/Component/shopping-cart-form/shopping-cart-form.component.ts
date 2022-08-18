
import { Component, OnInit ,OnDestroy,Input} from '@angular/core';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { ShoppingCart } from 'src/app/Model/shopping-cart';
import { Order } from 'src/app/Model/order';

import { OrderService } from 'src/app/Service/order.service';
import { LoginService } from 'src/app/Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-form',
  templateUrl: './shopping-cart-form.component.html',
  styleUrls: ['./shopping-cart-form.component.css']
})
export class ShoppingCartFormComponent implements OnInit ,OnDestroy{
  shipping:{
    name:string,
    address1:string,
    address2:string,
    city:string

  }={name:'', address1:'',address2:'',city:''}

  userSubscription:any;
  userId: string;
  @Input ('cart')cart:ShoppingCart;
  constructor(private OrderService:OrderService
    ,private Authervice:LoginService
    ,private router:Router) { }
 
  async ngOnInit() {

  

  this.userSubscription=this.Authervice.user$.subscribe(user=>{
    this.userId=user.uid
}); 
  }

  ngOnDestroy() { 
    this.userSubscription.unsubscribe();
  }
  async PlaceOrder(){
    console.log("cart",this.cart)
    let order =new Order(this.userId,this.shipping,this.cart)
    let result= await this.OrderService.placeOrder(order)
    console.log(result.key)
    this.router.navigate(['/order-success',result.key])
   

  }

}

