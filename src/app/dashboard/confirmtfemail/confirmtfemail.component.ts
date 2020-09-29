import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { JwtService, TfaService } from '../../shared/services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-confirmtfemail',
  templateUrl: './confirmtfemail.component.html',
  styleUrls: ['./confirmtfemail.component.css']
})
export class ConfirmtfemailComponent {
  totpCode = {
    totpcode: ''
  };
  constructor(
    private twoAuth: TfaService,
    private jwtService: JwtService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Two Factor Authentication');
  }

  onSubmit(form: NgForm) {
      this.twoAuth.verifyTotp(this.totpCode.totpcode).subscribe(
        res => {
          console.log(res);
          this.jwtService.setToken(res.token);
        },
        err => {
          console.log(err);
        }
      );
    }
}
