import { Component, OnInit,Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product')product;
  @Input('shopping-cart')shopingCart;

  constructor(private cartService:ShoppingCartService) { }

  addToCart(){
    this.cartService.addToCart(this.product);
   }
   removefromCart(){
     this.cartService.removeItem(this.product)
   }
   
}
