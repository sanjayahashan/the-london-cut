import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  selectedUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl+'/register',user);
  }
}
