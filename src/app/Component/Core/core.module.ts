import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
 import { HeaderComponent } from './header/header.component';
 import { NotFoundComponent } from './not-found/not-found.component';
 import { HomeComponent } from './home/home.component';

 import { ProductModule } from '../Product/product.module';
 import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ProductModule

  ],exports:[HeaderComponent]
})
export class CoreModule { }
