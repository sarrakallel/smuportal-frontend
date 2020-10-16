import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "@app/shared";
import { environment } from "@environments/environment";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-register",
  templateUrl: "register.component.html",
  styleUrls: ["register.component.css"]
})
export class RegisterComponent implements OnInit {
  emailRegEx = environment.EMAIL_CONFIG.EMAIL_DOMAINS;
  submitted = false;
  loading = false;
  errRegisterMsg = "";

  form: FormGroup = new FormGroup({
    firstName: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$"),
        Validators.minLength(2),
        Validators.maxLength(255)
      ]
    ),
    lastName: new FormControl ("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$"),
        Validators.minLength(2),
        Validators.maxLength(255)
      ]
    ),
    universityID: new FormControl ("", [
        Validators.required,
        Validators.pattern("^[0-9]{7,7}$"),
      ]
    ),
    email: new FormControl ("", [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          "^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(" +
            this.emailRegEx +
            ")$"
        )
      ]
    ),
    password: new FormControl ("", [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,1024}$"
        )
      ]
    )
  });

  userExistsErrorMsg = "";
  httpClient: any;
  constructor(
    private router: Router,
    private authService: AuthService,
    private titleService: Title,
  ) {
    this.titleService.setTitle("Register");
  }

  ngOnInit() {
    // [Testing]
    // console.log(this.emailRegEx);
  }


  onSubmit() {
    this.submitted = true
    if (this.form.valid) {
      this.authService
        .register(this.form.value)
        .subscribe({
          next: data => {
            this.router.navigateByUrl('/login');
          },
          error: err => {
            this.errRegisterMsg = err.error.error;
          }
        });
    }
  }

  getFirstNameErrorMessage() {
    if (this.form.get('firstName').hasError('required')) {
      return 'First Name is required!';
    } else if (this.form.get('firstName').hasError('pattern')
      || this.form.get('firstName').hasError('minLength')
      || this.form.get('firstName').hasError('maxLength')) {
      return 'First name is invalid! Must be at least 2 characters long and have only letters';
    }
  }

  getLastNameErrorMessage() {
    if (this.form.get('lastName').hasError('required')) {
      return 'Last Name is required!';
    } else if (this.form.get('lastName').hasError('pattern')
      || this.form.get('lastName').hasError('minLength')
      || this.form.get('lastName').hasError('maxLength')) {
      return 'Last name is invalid! Must be at least 2 characters long and have only letters';
    }
  }

  getEmailErrorMessage() {
    if (this.form.get('email').hasError('required')) {
      return 'Email is required!';
    } else if (this.form.get('email').hasError('minLength')
      || this.form.get('email').hasError('maxLength')
      || this.form.get('email').hasError('pattern')) {
      return 'Email is invalid! Must contain the domain medtech.tn or msb.tn or smu.tn';
    }
  }

  getUniversityErrorMessage() {
    if (this.form.get('universityID').hasError('required')) {
      return 'University ID is required!';
    } else if (
      this.form.get('universityID').hasError('pattern')
      ) {
      return 'ID is invalid! Must have 7 numbers only';
    }
  }

  getPasswordErrorMessage() {
    if (this.form.get('password').hasError('required')) {
      return 'Password is required!';
    } else if (this.form.get('password').hasError('minlength')) {
      return 'Password is invalid! Must have at least 6 characters long, one Upper case letter, one lower case letter and a special character';
    }
  }
}
//
