import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;
  currentUser : any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn();
    if(this.isLoggedIn)
      this.currentUser = this.userService.getCurrentUser();
  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = false;
  }
}
