import { User } from './../user';
import { Injectable } from '@angular/core';
import { UserLoginDto } from './dtos/user-login-dto';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersJson: JSON = JSON.parse(localStorage.getItem('users')) || {};
  LoggedIn: boolean;
  loggedinUser: any = {};

  constructor(private router: Router) {  }

  signup(newUser: User) {
    // Check if user already exist
    for(let user of Object.keys(this.usersJson))
    {
      if(user == newUser.email)
      {
        alert("This email is already registerd!");
        return;
      }
    }
    // add user to object, and reset users in local storage
    this.usersJson[newUser.email] = newUser;
    localStorage.removeItem('users');
    localStorage.setItem('users', JSON.stringify(this.usersJson));
    this.LoggedIn = true;
    this.setCurrentUser(newUser);
    location.replace('/');
  }

  login(user: UserLoginDto) {
    for(let key of Object.keys(this.usersJson))
    {
      if (key == user.email && this.usersJson[key].password == user.password) {
        this.LoggedIn = true;
        this.setCurrentUser(this.usersJson[key]);
        location.replace('/');
        return;
      }
    }
    alert("Email or password incorrect!");
  }

  logout() {
    localStorage.removeItem('loggedinUser');
    this.LoggedIn = false;
  }

  setCurrentUser(user) {
    localStorage.removeItem('loggedinUser');
    localStorage.setItem('loggedinUser', JSON.stringify(user));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('loggedinUser'));
  }

  isLoggedIn(): boolean {
    if(localStorage.getItem('loggedinUser'))
     return true;
    
    else return false;
  }
}
