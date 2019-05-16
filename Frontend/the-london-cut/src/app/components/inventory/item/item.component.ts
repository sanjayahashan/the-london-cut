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
  itemList: Observable<Item[]>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemList = this.itemService.all();
    console.log(this.itemList);
  }

  search(term: string) {
    this.itemList = this.itemService.all().pipe(map(
      items => items.filter(item => item.name.toLowerCase().includes(term.toLowerCase())
    )));
  }

  display(type: String) {
    this.itemList = this.itemService.all().pipe(map(
      items => items.filter(item => item.type==type)
    ));
  }

  deleteItem(id) {
    this.itemService.delete(id).subscribe(data => {
      console.log(data);
    });
  }
}
 