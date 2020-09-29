import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileDetailsComponent } from './profile-details';
import { ProfileSecurityComponent } from './profile-security';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      breadcrumb: 'Account'
    },
    children: [{
        path: '', pathMatch: 'full', redirectTo: 'details',
      },
      {
        path: 'details',
        component: ProfileDetailsComponent,
        data: {
          breadcrumb: 'Details'
        }
      },
      {
        path: 'security',
        component: ProfileSecurityComponent,
        data: {
          breadcrumb: 'Security'
        }
    }]
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileSecurityComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class ProfileModule { }
