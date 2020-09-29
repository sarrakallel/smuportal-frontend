import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService, TfaService } from "../../shared";
import { Title } from "@angular/platform-browser";
import { TwoFactorAuthComponent } from "../twofactorauth";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"]
})
export class LoginComponent {
  userModel = {
    email: "",
    password: ""
  };
  loginErrorMessage: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private titleService: Title,
    private tfaService: TfaService
  ) {
    this.titleService.setTitle("Login");
  }

  onSubmit(form: NgForm) {
    this.auth.login(form.value).subscribe({
      next: (data: any) => {
        if (
          this.auth.getTwoFactorType() === "app" ||
          this.auth.getTwoFactorType() === "email"
        ) {
          this.tfaService.generateTotp().subscribe();
          this.router.navigateByUrl("/twofactor");
        } else {
          this.router.navigateByUrl("/dashboard");
        }
      },
      error: err => (this.loginErrorMessage = err)
    });
  }
}
// TODO : ngOnDestroy() to avoid memoery leakage
