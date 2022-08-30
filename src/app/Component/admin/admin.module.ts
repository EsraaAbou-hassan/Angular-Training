import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProuductsComponent } from './admin-prouducts/admin-prouducts.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductModule } from '../Product/product.module';

@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminProuductsComponent,
 
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductModule
   


  ]
})
export class AdminModule { }
