import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { ProductsComponent } from './products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../angular-material.module';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import {CustomFormsModule} from 'ng2-validation';

@NgModule({
  declarations: [
    ProductCartComponent,
    ProductQuantityComponent,
    ProductsComponent,

  ],
  imports: [
    
    CommonModule,
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularMaterialModule

  ],exports:[
    ProductCartComponent,
    ProductQuantityComponent,
    ProductsComponent,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularMaterialModule
  ]
})
export class ProductModule { }
