import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../Product/product.module';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartFormComponent } from './shopping-cart-form/shopping-cart-form.component';

import { MyOrderComponent } from './my-order/my-order.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    
    MyOrderComponent,
    CheckOutComponent,
    OrderSuccessComponent,
   
    ShoppingCartSummaryComponent,
    ShoppingCartFormComponent
  ],
  imports: [
    CommonModule,
    ProductModule
  ]
})
export class ShoppingModule { }
