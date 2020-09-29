import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector : 'app-profile',
  templateUrl : 'profile.component.html',
  styleUrls : ['profile.component.css']
})
export class ProfileComponent {
  constructor(private auth: AuthService, private router: Router) {}
  faUnlockAlt = faUnlockAlt;
  faUser = faUserAlt;
  faSignOut = faSignOutAlt;

  onLogout() {
    this.auth.purgeAuth();
    this.router.navigateByUrl('/');
  }
}
