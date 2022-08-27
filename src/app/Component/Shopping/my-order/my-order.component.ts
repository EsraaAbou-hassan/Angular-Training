import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Service/order.service';
import { Order } from 'src/app/Model/order';
import { map } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
UserId:string;
displayedColumns: string[] = ['name', 'date'];
order;
listOrders: MatTableDataSource<any>;
  constructor(private orderService:OrderService,private route:ActivatedRoute) {


  }
products;
  ngOnInit(): void {



    this.UserId=this.route.snapshot.paramMap.get('id')

    this.orderService.getOrderByUserId(this.UserId).subscribe(or=>{
         let orders=this.order=or.map((item:any[]) => {
          
        return item
      });
      this.listOrders = new MatTableDataSource(orders);

      });
  }
getProducts(){
  
}
}
