import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';

var serverUrl = 'http://localhost:3000/api/orders/';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  all(): Observable<Order[]> {
    return this.http.get<Order[]>(serverUrl);
  }

  add(order: Order): Observable<Order> {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    return this.http.post<Order>(serverUrl, order)
  }

  update(order: Order): Observable<Order> {
    return this.http.put<Order>(serverUrl + order._id, order);
  }
  
  get(id: String): Observable<Order> {
    return this.http.get<Order>(serverUrl + id);
  }

  delete(id:String) {
    return this.http.delete<Order>(serverUrl + id);
  }

}
