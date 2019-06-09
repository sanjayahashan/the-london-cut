import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

var serverUrl = 'http://localhost:3000/api/items/';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  all(): Observable<Item[]> {
    return this.http.get<Item[]>(serverUrl);
  }

  add(item: Item): Observable<Item> {
    // let headers = new HttpHeaders();
    // headers.append('content-type', 'application/json');

    let formData = new FormData();
    formData.append('name', item.name);
    formData.append('description', item.description);
    formData.append('quantity', item.quantity);
    formData.append('price', item.price);
    formData.append('type', item.type);
    formData.append('suit_category', item.suit_category);
    formData.append('color', item.color);
    formData.append('image', item.image);


    return this.http.post<Item>(serverUrl, formData)
  }

  update(item: Item): Observable<Item> {
    return this.http.put<Item>(serverUrl + item._id, item);
  }
  
  get(id: String): Observable<Item> {
    return this.http.get<Item>(serverUrl + id);
  }

  delete(id:String) {
    return this.http.delete<Item>(serverUrl + id);
  }
}
