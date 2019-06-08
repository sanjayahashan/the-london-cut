import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Order} from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  orderList: Observable<Order[]>;
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
    this.getItems();
  }

  getItems() {
    this.orderList = this.orderService.all();
    console.log(this.orderList);
  }

  search(term: string) {
    this.orderList = this.orderService.all().pipe(map(
      orders => orders.filter(order => order.orderNo.toLowerCase().includes(term.toLowerCase())
    )));
  }


  deleteItem(id) {
    this.orderService.delete(id).subscribe(data => {
      console.log(data);
    });
  }

  onEdit(order){
    this.ordersForm.controls._id.setValue(order._id)
    this.ordersForm.controls.orderNo.setValue(order.orderNo)
    this.ordersForm.controls.orderDes.setValue(order.orderDes)
    this.ordersForm.controls.customerName.setValue(order.customerName)
    this.ordersForm.controls.customerAdd.setValue(order.customerAdd)
    this.ordersForm.controls.contactNo.setValue(order.contactNo)
    this.ordersForm.controls.placedDate.setValue(order.placedDate)
    this.ordersForm.controls.completedDate.setValue(order.completedDate)
    this.ordersForm.controls.paymentInfo.setValue(order.paymentInfo)
    this.ordersForm.controls.amount.setValue(order.amount)
    
    console.log(order)
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
    console.log(this.ordersForm)
  }

}
