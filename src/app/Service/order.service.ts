import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFireDatabase,private cartService:ShoppingCartService) { }

 async placeOrder(order:any){
   let result= await  this.db.list("/orders").push(order)
    this.cartService.clearCart();
    return result;

  }
  getOrders(){
    
    return this.db.list("/orders").valueChanges();
  }
  getOrderByUserId(userId:string){
    return this.db.list('/orders',
     ref =>ref.orderByChild("userId").equalTo(userId))
     .valueChanges();

   
   }
}