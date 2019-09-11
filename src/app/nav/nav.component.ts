import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn = false;
  currentUser: any = {};
  subscription: Subscription

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription= this.userService.$LoggedIn.subscribe(isLoggedin => {
      this.isLoggedIn = isLoggedin;
      if(isLoggedin)
        this.currentUser = this.userService.getCurrentUser();
    }, err => {
      console.log('ERROR OCCURED: ' + err);
    });
  }

  logout() {
    this.userService.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
