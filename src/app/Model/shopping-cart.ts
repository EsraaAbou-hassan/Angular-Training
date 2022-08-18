import { IProduct } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart { 
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
     this.itemsMap = itemsMap || {};
    
    for (let productId in itemsMap) {
      let item = itemsMap[productId];
      let cartItem=new ShoppingCartItem( 
        { ...item, key: productId }
      )
  
     
      this.items.push(cartItem );
    }
  }
  
  get totalItemsCount(){
  let count=0;
       for(let productId in this.items){
       count +=this.items[productId].quantity
       }
       return count;
  }
get totalPrice(){
  let sum=0;
       for(let productId in this.items){
        sum +=this.items[productId].totalPrice;
       }
       return sum;
}
getQuantity(product:IProduct){
  let item=this.itemsMap[product.key];
  
  return item ? item.quantity:0;
}
}