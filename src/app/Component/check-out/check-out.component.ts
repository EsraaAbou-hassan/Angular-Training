import { Component, OnInit ,OnDestroy,Input} from '@angular/core';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { ShoppingCart } from 'src/app/Model/shopping-cart';



@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit,OnDestroy{
  
  cart:ShoppingCart;
  cartSubscription:any;

  constructor(private cartService:ShoppingCartService) { }
 
  async ngOnInit() {

    let cart$ = (await this.cartService.getCart())
    this.cartSubscription= cart$.subscribe(res=>{
      this.cart=res;
    
  }); 
  

 

  }

  ngOnDestroy() { 
    this.cartSubscription.unsubscribe();
  }
  
}
