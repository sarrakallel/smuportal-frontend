import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  userExistsErrorMsg = "";
  httpClient: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private titleService: Title
  ) {
    this.titleService.setTitle("Register");
  }

  ngOnInit() {
    // [Testing]
    // console.log(this.emailRegEx);
    this.registerForm = this.formBuilder.group({
      firstName: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$"),
          Validators.minLength(2),
          Validators.maxLength(255)
        ]
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$"),
          Validators.minLength(2),
          Validators.maxLength(255)
        ]
      ],
      universityID: [
        "",
        [
          Validators.required,
          Validators.min(1000000),
          Validators.max(9999999),
          Validators.pattern("^[0-9]*$")
        ]
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            "^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(" +
              this.emailRegEx +
              ")$"
          )
        ]
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,1024}$"
          )
        ]
      ]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  // tslint:disable-next-line: adjacent-overload-signatures

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl("/login");
      },
      error: error => {
        console.log(error);
        this.loading = false;
      }
    });
  }
}
//
