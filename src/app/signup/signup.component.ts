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
  user = new User();
  confirmPassword: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  signup() {
    this.userService.signup(this.user);
  }
}
