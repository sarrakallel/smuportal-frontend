import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared';

@Component({
  selector: 'app-request-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']

})
export class ResponseResetComponent implements OnInit {
  [x: string]: any;
  ResponseResetForm: FormGroup;
  forbiddenEmails: any;
  errorMessage: string;
  successMessage: string;
  resetToken: null;
  CurrentState: any;
  IsResetFormValid = true;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder ) {

    this.CurrentState = 'Wait';
    this.route.params.subscribe(params => {
      this.resetToken = params.token;
      console.log(this.resetToken);
      console.log(typeof(this.resetToken));
      this.VerifyToken();
    });
  }

  ngOnInit() {
    this.Init();
  }

  VerifyToken() {
    this.authService.validPasswordToken( this.resetToken ).subscribe(
      data => {
        this.CurrentState = 'Verified';
      },
      err => {
        this.CurrentState = 'NotVerified';
      }
    );
  }

  Init() {
    this.ResponseResetForm = this.fb.group(
      {
        resettoken: [this.resetToken],
        // newPassword: ['', [Validators.required, Validators.minLength(4)]],
        // confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
        newPassword: [''],
        confirmPassword: ['']
      }
    );
  }


  Validate(passwordFormGroup: FormGroup) {
    const new_password = passwordFormGroup.value.newPassword;
    const confirm_password = passwordFormGroup.value.confirmPassword;

    if (confirm_password.length <= 0) {
      return null;
    }

    if (confirm_password !== new_password) {
      return {
        doesNotMatch: true
      };
    }

    return null;
  }

  ResetPassword(form) {
    console.log(form.get('confirmPassword'));
    console.log(this.ResponseResetForm.value.newPassword);
    const haha = JSON.parse(JSON.stringify({password: this.ResponseResetForm.value.newPassword}));
    console.log(typeof(haha));
    console.log(haha);
    if (form.valid) {
      this.IsResetFormValid = true;
      this.authService.newPassword(this.resetToken, haha).subscribe(
        data => {
          this.ResponseResetForm.reset();
          this.successMessage = 'success';
          setTimeout(() => {
            this.successMessage = null;
            this.router.navigate(['login']);
          }, 3000);
        },
        err => {
          if (err.error.message) {
            this.errorMessage = err.error.message;
            console.log(this.errorMessage);
          }
        }
      );
    } else { this.IsResetFormValid = false; }
  }
}
