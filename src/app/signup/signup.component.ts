import { UserService } from './../services/user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  inputsFocused: boolean[] = [false, false, false, false, false];
  user = new User();
  confirmPassword: string;
  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  signup() {
    this.userService.signup(this.user);
  }

  focusFunction(i: HTMLElement) {
    switch (i.id) {
      case 'i1':
          this.inputsFocused[0] = true;
          break;
      case 'i2':
          this.inputsFocused[1] = true;
          break;
      case 'i3':
          this.inputsFocused[2] = true;
          break;
    }
  }

  focusOutFunction(i) {
    switch (i.id) {
      case 'i1':
          this.inputsFocused[0] = false;
          break;
      case 'i2':
          this.inputsFocused[1] = false;
          break;
      case 'i3':
          this.inputsFocused[2] = false;
          break;
    }
  }

}
