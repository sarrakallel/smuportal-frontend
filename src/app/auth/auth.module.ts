import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { TwoFactorAuthComponent } from './twofactorauth';
import { RequestResetComponent } from './request-reset';
import { ResponseResetComponent } from './response-reset';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'twofactor',
    component: TwoFactorAuthComponent// , canActivate: [AuthGuard]
  },
  {
    path: 'request-reset-password',
    component: RequestResetComponent,
  },
  {
    path: 'response-reset-password/:token',
    component: ResponseResetComponent
  },
  {
    path: 'confirm-email/:token',
    component: ConfirmEmailComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TwoFactorAuthComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ConfirmEmailComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
