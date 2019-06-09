import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

var serverUrl = 'http://localhost:3000/api/employees/';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  all(): Observable<Employee[]> {
    return this.http.get<Employee[]>(serverUrl);
  }

  add(employee: Employee): Observable<Employee> {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.post<Employee>(serverUrl, employee)
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(serverUrl + employee._id, employee);
  }
  
  get(id: String): Observable<Employee> {
    return this.http.get<Employee>(serverUrl + id);
  }

  delete(id:String) {
    return this.http.delete<Employee>(serverUrl + id);
  }

}
