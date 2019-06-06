import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Income} from '../models/income.model';
import { Observable } from 'rxjs';

var serverUrl = 'http://localhost:3000/api/income/';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getIncome(){
    return this.http.get(serverUrl);
  }
}
