import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Order} from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  order:Order;

  

    ordersForm = new FormGroup ({
    _id: new FormControl(),
    orderNo: new FormControl(''),
    orderDes: new FormControl(''),
    customerName: new FormControl(''),
    customerAdd: new FormControl(''),
    contactNo: new FormControl(''),
    placedDate: new FormControl(''),
    completedDate: new FormControl(''),
    paymentInfo: new FormControl(''),
    amount:new FormControl(''),
    
  });

  constructor(
      private orderService: OrderService,
      private route: ActivatedRoute,
  )
   { }

  ngOnInit() {
    
  }

  onSubmit() {
    if(!this.ordersForm.get('_id').value) {
      this.order = this.ordersForm.value;
      this.orderService.add(this.order).subscribe(order => {
      });
    }
    else {
      this.order = this.ordersForm.value;
      this.orderService.update(this.order).subscribe(order => {
        
      });
    }
  }

}
