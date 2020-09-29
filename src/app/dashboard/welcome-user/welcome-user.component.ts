import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../shared'

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {
  currentUser: User;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser;
  }

}
