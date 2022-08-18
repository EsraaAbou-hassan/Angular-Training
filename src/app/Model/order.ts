import { IUser} from './user';
import { ShoppingCart} from './shopping-cart';

export class Order{ 
  datePlaced:number;
  items:any[];
  constructor(public userId:string,public shipping:any,
    public shopingCart:ShoppingCart){
    this.datePlaced=new Date().getTime();

    this.items=this.shopingCart.items.map(i=>{
      return{
        product:{
          
          title:i.title,
          price:i.price,
          image:i.image
        },
        quantity:i.quantity,
        totalPrice:i.totalPrice

      }
    })
  }

}
