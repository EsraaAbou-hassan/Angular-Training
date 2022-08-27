import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './Component/Core/side-bar/side-bar.component';
 import { HeaderComponent } from './Component/Core/header/header.component';
 import { NotFoundComponent } from './Component/Core/not-found/not-found.component';
 import { HomeComponent } from './Component/Core/home/home.component';

import { ShoppingCartComponent } from './Component/shopping-cart/shopping-cart.component';
import { SignupComponent } from './Component/signup/signup.component';

import { MyOrderComponent } from './Component/my-order/my-order.component';
import { CheckOutComponent } from './Component/check-out/check-out.component';
import { ProductsComponent } from './Component/products/products.component';
import { OrderSuccessComponent } from './Component/order-success/order-success.component';
import { LoginComponent } from './Component/login/login.component';

import { AdminOrdersComponent } from './Component/admin/admin-orders/admin-orders.component';
import { AdminProuductsComponent } from './Component/admin/admin-prouducts/admin-prouducts.component';

import {NgbPaginationModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AddProductComponent } from './Component/admin/add-product/add-product.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatSelectModule} from '@angular/material/select';

import {CustomFormsModule} from 'ng2-validation';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatSortModule} from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProductCartComponent } from './Component/product-cart/product-cart.component';
import { ProductQuantityComponent } from './Component/product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent } from './Component/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartFormComponent } from './Component/shopping-cart-form/shopping-cart-form.component';
// import { CoreModule } from './Component/Core/core.module'

@NgModule({
  declarations: [
    AppComponent,

     ShoppingCartComponent,
     SignupComponent,
     SideBarComponent,
     HeaderComponent,
     NotFoundComponent,
     HomeComponent,
     MyOrderComponent,
     CheckOutComponent,
     ProductsComponent,
     OrderSuccessComponent,
     AdminOrdersComponent,
     AdminProuductsComponent,
     LoginComponent,
     AddProductComponent,
     ProductCartComponent,
     ProductQuantityComponent,
     ShoppingCartSummaryComponent,
     ShoppingCartFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatFormFieldModule,

    NgxMatFileInputModule,
    MatSelectModule,
    CustomFormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule
    // CoreModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[ProductsComponent],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
