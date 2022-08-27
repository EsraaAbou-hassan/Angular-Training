import { Component, OnInit,OnDestroy,ViewChild   } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { IProduct } from 'src/app/Model/product';
import { MatTableDataSource} from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator'; 

import {  Subscription ,of} from 'rxjs';
import {MatSort} from '@angular/material/sort';
import { Router} from '@angular/router';
@Component({
  selector: 'app-admin-prouducts',
  templateUrl: './admin-prouducts.component.html',
  styleUrls: ['./admin-prouducts.component.css']
})
export class AdminProuductsComponent implements OnInit,OnDestroy {
// products:IProduct[]=[{titel:'',category:'',image:'',price:0}];
products:any[];
filterProducts:any[];
subscription:Subscription;
listData: MatTableDataSource<any>;
displayedColumns: string[] = ['title', 'price','actions'];
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
searchKey: string;

  constructor(private productService:ProductService,private router:Router) {
   this.subscription= this.productService.getAllproduct()
   .subscribe(pro=>{
    let array= this.filterProducts=this.products =pro.map(item => {
      return {
        key: item.key,
        ...(item.payload.val() ) as IProduct
      };
    });
     this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
       
      })
 
  
  

   }
add(){
  this.router.navigate(['admin/products/add']);

}
edit(key:string){
  
  this.router.navigate(['/admin/products/',key]);

}
  ngOnInit(): void {
  }
  ngOnDestroy() {
     this.subscription.unsubscribe();
  }
  delete(id:string){
    let con=confirm("Are you sure to delete this product ");
    if(con)
       this.productService.deleteProduct(id);
  }
  
 
   onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


}
