import { Component, OnInit } from "@angular/core";
import { TfaService, AuthService, User } from "../../shared";
import { Router } from "@angular/router";
@Component({
  selector: "app-profile-security",
  templateUrl: "profile-security.component.html",
  styleUrls: ["profile-security.component.css"]
})
export class ProfileSecurityComponent implements OnInit {
  tfaButtonsText: { app: string; email: string };

  constructor(
    private tfaService: TfaService,
    private authService: AuthService,
    private router: Router
  ) {
    this.tfaButtonsText = {
      app: "Enable",
      email: "Enable"
    };
  }

  ngOnInit() {
    this.authService.getCurrentUserObs().subscribe({
      next: (user: User) => {
        if (user.twoFactorType === "email") {
          this.updateButtonText("email");
        } else if (user.twoFactorType === "app") {
          this.updateButtonText("app");
        }
      }
    });
  }

  enableAppTwoFactor() {
    this.tfaService.enableAppTwoFactor().subscribe({
      next: (res: any) => {
        console.log(res);
        this.updateButtonText("app");
      }
    });
  }

  enableEmailTwoFactor() {
    this.tfaService.generateEmailSecret().subscribe({
      next: (res: any) => {
        console.log(res);
        // If wanted to update it dynamically I just have to use this
        this.updateButtonText("email");
        this.tfaService.generateTotp().subscribe();
        this.router.navigateByUrl("/twofactor");
      }
    });
  }

  updateButtonText(text: string) {
    console.log("Updating button", this.tfaButtonsText[text]);
    this.tfaButtonsText[text] =
      this.tfaButtonsText[text] === "Enable" ? "Disable" : "Enable";
  }
}
