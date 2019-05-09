import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';
import { ItemService } from 'src/app/shared/services/item.service';
import { filter, map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemService]
})
export class ItemComponent implements OnInit {
  itemList: Observable<Item>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItemsByType();
  }

  getItems() {
    this.itemList = this.itemService.all();
    console.log(this.itemList);
  }

  getItemsByType() {
    this.itemList = this.itemService.all().pipe(filter(item => item.name != "Wool"));
    this.itemList.subscribe(item => {
      console.log(item.name);
    });
      // console.log(this.itemList);
    // this.itemList = this.itemService.all().pipe(filter(item => item.name.includes("ool")));
  }

  deleteItem(id) {
    this.itemService.delete(id).subscribe(data => {
      console.log(data);
    });
  }
}
 