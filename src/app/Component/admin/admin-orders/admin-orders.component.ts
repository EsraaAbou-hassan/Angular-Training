import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Service/order.service';
import {LoginService} from 'src/app/Service/login.service';
import { MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'date', 'action'];
  userId:string;
  listOrders: MatTableDataSource<any>;


  constructor(private Auth:LoginService,private OrderService:OrderService) { }

  ngOnInit(): void {
    this.Auth.user$.subscribe(user=>{
      this.userId=user.uid;});
      this.OrderService.getOrders().subscribe(or=>{
        let orders =or.map(item => {
          return item
          
        });
        this.listOrders = new MatTableDataSource(orders);

      });
  }

}
