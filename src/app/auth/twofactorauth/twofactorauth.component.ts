import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { JwtService, TfaService, AuthService } from "../../shared/";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-twofactorauth",
  templateUrl: "twofactorauth.component.html",
  styleUrls: ["twofactorauth.component.css"]
})
export class TwoFactorAuthComponent {
  totp = {
    code: ""
  };
  twoFactorType: string;
  wrongTotp: string;

  constructor(
    private twoAuth: TfaService,
    private auth: AuthService,
    private router: Router,
    private jwtService: JwtService,
    private titleService: Title
  ) {
    this.titleService.setTitle("Login");
    this.twoFactorType = this.auth.getTwoFactorType();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.twoAuth.verifyTotp(form.value).subscribe(
      res => {
        console.log(res);
        if (res.success) {
          this.jwtService.setToken(res.token);
          this.router.navigateByUrl("/dashboard");
        } else {
          this.wrongTotp = "Wrong verification code, please try again";
          console.log(this.wrongTotp);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
