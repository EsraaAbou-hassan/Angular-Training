import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './Component/Shopping/shopping-cart/shopping-cart.component';
import { SignupComponent } from './Component/Auth/signup/signup.component';
import { NotFoundComponent } from './Component/Core/not-found/not-found.component';
import { HomeComponent } from './Component/Core/home/home.component';
import { MyOrderComponent } from './Component/Shopping/my-order/my-order.component';
import { ProductsComponent } from './Component/Product/products/products.component';
import { CheckOutComponent } from './Component/Shopping/check-out/check-out.component';
import { AdminProuductsComponent } from './Component/admin/admin-prouducts/admin-prouducts.component';
import { AdminOrdersComponent } from './Component/admin/admin-orders/admin-orders.component';
import { AddProductComponent } from './Component/admin/add-product/add-product.component';

import { OrderSuccessComponent } from './Component/Shopping/order-success/order-success.component';
import { LoginComponent } from './Component/Auth/login/login.component';
import {AuthGuardService} from './Service/auth-guard.service';
import {AdminAuthGurdService} from './Service/admin-auth-gurd.service';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'signup',component:SignupComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},

  {path:'shopping-chart',component:ShoppingCartComponent,pathMatch:'full'},
  {path:'myOrders/:id',component:MyOrderComponent,pathMatch:'full',canActivate:[AuthGuardService]},
  {path:'products',component:ProductsComponent,pathMatch:'full'},
  {path:'check-out',component:CheckOutComponent,pathMatch:'full',canActivate:[AuthGuardService]},
  {path:'order-success/:id',component:OrderSuccessComponent,pathMatch:'full',canActivate:[AuthGuardService]},
  {path:'admin/orders',component:AdminOrdersComponent,pathMatch:'full',canActivate:[AuthGuardService,AdminAuthGurdService]},
  {path:'admin/products/add',component:AddProductComponent,pathMatch:'full',canActivate:[AuthGuardService,AdminAuthGurdService]},
  {path:'admin/products/:id',component:AddProductComponent,pathMatch:'full',canActivate:[AuthGuardService,AdminAuthGurdService]},
  {path:'admin/products',component:AdminProuductsComponent,pathMatch:'full',canActivate:[AuthGuardService,AdminAuthGurdService]},

  {path:'**',component:NotFoundComponent,pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
