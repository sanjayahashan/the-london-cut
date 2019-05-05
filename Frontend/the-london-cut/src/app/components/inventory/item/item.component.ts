import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemService]
})
export class ItemComponent implements OnInit {
  itemList: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.all().subscribe(items => {
      this.itemList = items;
      console.log(this.itemList);
    });
  }

  deleteItem(id) {
    this.itemService.delete(id).subscribe(data => {
      console.log(data);
    });
  }
}
 