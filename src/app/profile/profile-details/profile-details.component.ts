import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-details',
  templateUrl: 'profile-details.component.html',
  styleUrls: ['profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Profile');
  }

  faPencilAalt = faPencilAlt;
  User: any;

  ngOnInit() {
    this.auth.getUserInfo().subscribe({
      next: (user: any) => {
        this.User = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          universityID: user.universityID,
          lastLogin: user.lastLogin,
          registeredOn: user.registeredOn
        };
      },
    });
  }
}
