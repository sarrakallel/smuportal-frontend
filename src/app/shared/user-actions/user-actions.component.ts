import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../shared';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent implements OnInit {
  faAngleDown = faAngleDown;
  currentUser: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser;
  }

  onLogout() {
    this.authService.purgeAuth();
    this.router.navigateByUrl('/');
  }

}
