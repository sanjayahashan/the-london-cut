import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { App } from '../models/appointment.model';
import { Observable } from 'rxjs';

var serverUrl = 'http://localhost:3000/api/appointment/';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  all(): Observable<App[]> {
    return this.http.get<App[]>(serverUrl);
  }

  add(app: App): Observable<App> {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    return this.http.post<App>(serverUrl, app)
  }

}