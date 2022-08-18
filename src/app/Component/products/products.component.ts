import { Component, OnInit ,Input} from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { IProduct } from 'src/app/Model/product';
import { ActivatedRoute } from '@angular/router';
import {switchMap } from 'rxjs';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { Observable} from 'rxjs';
import { ShoppingCart} from 'src/app/Model/shopping-cart';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:IProduct[]=[];
  filterProducts:IProduct[]=[];
  cart$:Observable<ShoppingCart>;
 
 @Input('category') category:string; 

  constructor(private productService:ProductService,private route:ActivatedRoute,
   private  shoppingCartService:ShoppingCartService) { 
     
    
  }

 async ngOnInit() {
     this.cart$=await this.shoppingCartService.getCart()
   this.populateProducts()
   
      
       

  }
  private populateProducts(){
    this.productService.getAllproduct().pipe(
      switchMap(pro=>{
         this.filterProducts =this.products =pro.map(item => {
                return {
                  key: item.key,
                  ...(item.payload.val() ) as IProduct
                };
          });
       return this.route.queryParamMap;
        }))
        .subscribe(params => {
           this.category=params.get('category');
           this.applyFilter()
        }
      )
  }
 private applyFilter(){
  this.filterProducts=(this.category)?
  this.products.filter(p=>p.category===this.category)
  :this.products;
 }

}
