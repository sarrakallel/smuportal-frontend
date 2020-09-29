import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { TfaService } from "../shared/";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"]
})
export class DashboardComponent {
  constructor(
    private twoFaService: TfaService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle("Dashboard");
  }

  onSubmit(form: NgForm) {
    this.twoFaService.generateEmailSecret().subscribe(
      res => {
        console.log(res);
      },
      // Callback function for errors
      err => {
        console.log(err);
      }
    );
    this.twoFaService.generateTotp().subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("dashboard/confirm-tfa-email");
      },
      err => {
        console.log(err);
      }
    );
  }
}
