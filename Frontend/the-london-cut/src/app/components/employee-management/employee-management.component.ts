import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  OrdersForm = new FormGroup ({
    _id: new FormControl(),
    name: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
    type: new FormControl(''),
    suit_category: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
