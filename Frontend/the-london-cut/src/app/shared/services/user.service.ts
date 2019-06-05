import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };
}
