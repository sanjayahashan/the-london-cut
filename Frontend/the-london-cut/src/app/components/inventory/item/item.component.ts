import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';
import { ItemService } from 'src/app/shared/services/item.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemService]
})
export class ItemComponent implements OnInit {
  itemList: Observable<Item[]>;
  displayValue = "";

  constructor(
    private itemService: ItemService,
    private sanitizer: DomSanitizer
  ) { }

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
    if(type!="") {
      this.itemList = this.itemService.all().pipe(map(
        items => items.filter(item => item.type==type)
      ));
    }
    else {
      this.itemList = this.itemService.all();
    }
  }

  deleteItem(id) {
    this.itemService.delete(id).subscribe(data => {
      console.log(data);
    });
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl('http://localhost:3000\\' + url);
  }
}
 