import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/shared';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {
  message: string;
  fail: boolean;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.message = 'Processing...';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const token = params.token;
      if (token) {
        this.authService.confirmEmail(token).subscribe({
          next: res => {
            this.fail = false;
            this.message = 'Email confirmed';
          },
          error: err => {
            this.fail = true;
            this.message = 'Email could not be confirmed';
          }
        })
      }
      this.redirectLogin();
    })
  }

  redirectLogin() {
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 10000);
  }

}
