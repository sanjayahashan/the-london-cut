import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemService } from 'src/app/shared/services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/shared/models/item.model';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material';
import { Income } from 'src/app/shared/models/income.model';
import { IncomeService } from 'src/app/shared/services/income.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  
  constructor(
      private itemService: ItemService,
      private route: ActivatedRoute,
      private snackBar: MatSnackBar,
      private incomeService: IncomeService
    ) { }

  item: Item;
  income = new Income();
  days = 0;

  itemForm = new FormGroup ({
    _id: new FormControl(),
    name: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
    type: new FormControl(''),
    suit_category: new FormControl(''),
    color: new FormControl(''),
    customer: new FormGroup({
      name: new FormControl(),
      nic: new FormControl(),
      tel: new FormControl(),
      date: new FormControl(),
      advanced: new FormControl(),
    })
  });


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.itemService.get(id).subscribe(item => {
      this.item = item;
      this.itemForm.patchValue(item);
      if(item.customer.name!='') {
        // this.days = moment(item.customer.date.toString()).diff(Date.now(), 'days');
        this.days = moment(Date.now()).diff(item.customer.date_took, 'days');
        this.itemForm.disable();
      }
    });
  }

  onSubmit() {
    this.item = this.itemForm.value;
    this.item.customer.date_took = new Date();
    
    this.income.item = this.itemForm.get('_id').value;
    this.income.amount = this.itemForm.get('price').value;
    this.incomeService.add(this.income).subscribe(income => {
      console.log(this.income);
    });
    
    this.itemService.update(this.item).subscribe(item => {
      console.log(item);
    });
    this.snackBar.open("Item Renting Datails Saved Successfully", 'Dismiss', {
      duration: 3000
    });

    
    
    console.log(this.income.amount);
  }

  collect() {
    this.itemForm.patchValue({
      customer: {
        name: '',
        nic: '',
        tel: '',
        date: '',
        advanced: '',
      }
    });
    this.item = this.itemForm.value;
    this.itemService.update(this.item).subscribe(item => {
      console.log(item);
    });
  }
}
