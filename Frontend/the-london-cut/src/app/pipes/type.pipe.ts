import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../shared/models/item.model';

@Pipe({
  name: 'type',
  pure: false
})
export class TypePipe implements PipeTransform {

  transform(items: Item[], name: any): any {
    return items.filter(function(item) {
      return item.name.toLowerCase().includes(name.toString().toLowerCase());
    });
  }

}
