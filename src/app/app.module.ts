import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { ProductModule } from './Component/Product/product.module';

import { AdminModule  } from './Component/admin/admin.module'
import { AuthModule } from './Component/Auth/auth.module'
import { CoreModule } from './Component/Core/core.module'
import { ShoppingModule } from './Component/Shopping/shopping.module'
import { AngularMaterialModule } from './Component/angular-material.module';


@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    AdminModule  ,
    AuthModule,
    CoreModule,
    ShoppingModule,
    AngularMaterialModule,
   
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,


   
  ],
  schemas: [
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
