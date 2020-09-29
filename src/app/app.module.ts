import { NgModule, APP_INITIALIZER } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { PortalModule } from "./portal/portal.module";
import { ProfileModule } from "./profile/profile.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { RedoPortalModule } from "./redo-portal/redo-portal.module"
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppService } from "./shared";
import { ApplicationsModule } from "./applications/applications.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    PortalModule,
    ProfileModule,
    RedoPortalModule,
    ApplicationsModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppService],
      useFactory: (appService: AppService) => {
        return () => {
          return appService.loadAppsConfig();
        };
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
