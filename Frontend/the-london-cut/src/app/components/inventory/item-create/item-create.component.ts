import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from 'src/app/shared/models/item.model';
import { ItemService } from 'src/app/shared/services/item.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  item:Item;

  itemForm = new FormGroup ({
    _id: new FormControl(null),
    name: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
  });

  constructor(
      private itemService: ItemService,
      private route: ActivatedRoute,
      private router: Router,
    ) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')) {
      let id = this.route.snapshot.paramMap.get('id');
      this.itemService.get(id).subscribe(item => {
        this.itemForm.patchValue(item);
      });
    }
  }

  onSubmit() {
    // console.log(this.itemForm.value);
    if(this.itemForm.get('_id')==null) {
      this.itemForm.patchValue({_id:''});
      this.item = this.itemForm.value;
      this.itemService.add(this.item).subscribe(item => {
        console.log(item);
      });
    }
    else {
      this.item = this.itemForm.value;
      this.itemService.update(this.item).subscribe(item => {
        console.log(item);
      });
    }
  }
}
