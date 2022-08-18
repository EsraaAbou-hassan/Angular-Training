import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { IProduct } from 'src/app/Model/product';
import { ShoppingCart } from 'src/app/Model/shopping-cart';

import{take,map,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { }

  async addToCart(product:IProduct){
    this.changQuantity(product,1)
}
async removeItem(product:IProduct){
  this.changQuantity(product,-1)
  }
  
async clearCart(){
  let cartId=await this.getOrCreateCartId()

  return this.db.object("/shopping-cart/"+cartId+"/items").remove();  
}

  private async changQuantity(product:IProduct,change:number){
    let cartId= await this.getOrCreateCartId();
    let item$=this.getItem(cartId,product.key); 
   
    item$.snapshotChanges().pipe(take(1)).subscribe((item:any) =>  {
      let quantity = (item.payload.val()?.quantity || 0) + change;
      if (quantity == 0) item$.remove();
      else {
            if (item.key != null) {
            item$.update( { 
              title: product.title,
              image: product.image,
              price: product.price,
              quantity:quantity}); 
          }
          else{
            item$.set( {
              title: product.title,
              image: product.image,
              price: product.price,
              quantity: quantity,
              }); 
            }
      }
      // item$.update({ 
        // title: product.title,
        // image: product.image,
        // price: product.price,
        // quantity: quantity
     
     
  });

  }
  private getItem(cartId:string,productId:string){
    return this.db.object<any>("/shopping-cart/"+cartId+"/items/"+productId);
  }
  private create(){
    return this.db.list('/shopping-cart').
    push({
      dateCreated:new Date().getTime()

    })
  }
  
  async getCart():Promise<Observable<ShoppingCart>>{
    let cartId=await this.getOrCreateCartId()
   
    return (this.db.object('/shopping-cart/'+cartId).valueChanges())
    .pipe(map((m:any)=>new ShoppingCart(m?.items)));
} 
  private async getOrCreateCartId():Promise<string>{
    let cartId=localStorage.getItem('cartId');
    if(cartId)  return cartId;

    let res= await this.create();
    localStorage.setItem('cartId',res.key);
    return res.key
 }
  
}
