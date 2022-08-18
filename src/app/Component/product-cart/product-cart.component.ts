import { Component ,Input} from '@angular/core';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { ShoppingCart} from 'src/app/Model/shopping-cart';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {
  @Input('product')product;
  @Input('showAction')showAction;
  @Input('shopping-cart')shopingCart:ShoppingCart;

  
  constructor(private cartService:ShoppingCartService) { }
  addToCart(){
    this.cartService.addToCart(this.product);
   }
 
}
