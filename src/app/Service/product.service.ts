import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Observable} from 'rxjs';
import { IProduct } from 'src/app/Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) {

   }
  addProduct(product:any){
    console.log(product);
   return this.db.list('products').push(product)

  }
  getAllproduct(){
   
    return this.db.list('/products').snapshotChanges();

  
  }
  getProduct(id:string){
    return this.db.object('/products/'+id).valueChanges();

  }updateProduct(product:any,id:string){
    return this.db.object('/products/'+id).update(product);

  }deleteProduct(id:string){
    return this.db.object('/products/'+id).remove();



  }

  }

