import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

const serverUrl: String = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  selectedItem: Item;
  items: Item[];

  constructor(private http: HttpClient) { }

  all(): Observable<Item[]> {
    return this.http.get<Item[]>(serverUrl + 'items');
  }

  add(item: Item): Observable<Item> {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    return this.http.post<Item>(serverUrl + 'item', item)
  }

  update(item: Item): Observable<Item> {
    return this.http.put<Item>(serverUrl + 'item/' + item._id, item);
  }
  
  get(id: String): Observable<Item> {
    return this.http.get<Item>(serverUrl + 'item/' + id);
  }

  delete(id:String) {
    return this.http.delete<Item>(serverUrl + 'item/' + id);
  }
}