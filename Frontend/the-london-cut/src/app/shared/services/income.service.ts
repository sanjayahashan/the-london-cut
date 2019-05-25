import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Income } from '../models/income.model';

var serverUrl = 'http://localhost:3000/api/income/';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<Income[]> {
    return this.http.get<Income[]>(serverUrl);
  }

  add(income: Income): Observable<Income> {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    return this.http.post<Income>(serverUrl, income);
  }
}
