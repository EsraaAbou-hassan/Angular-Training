import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductModule } from '../Product/product.module';



@NgModule({
  declarations: [
    SignupComponent,

    LoginComponent
  ],
  imports: [
    CommonModule,
   
    ProductModule 

  ]
})
export class AuthModule { }
