import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuard } from "./guards";
import { JwtInterceptor } from "./interceptors";
import {
  AuthService,
  JwtService,
  TfaService,
  BoxBookingService
} from "./services";
import { HomeMessageComponent } from "./home-message";
import { UniversityIdPipe } from "./pipes";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BreadCrumbComponent } from "./breadcrumb/breadcrumb.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SearchbarComponent } from "../dashboard/searchbar/searchbar.component";
import { UserActionsComponent } from "./user-actions/user-actions.component";

@NgModule({
  declarations: [
    HomeMessageComponent,
    UniversityIdPipe,
    BreadCrumbComponent,
    NavbarComponent,
    SearchbarComponent,
    UserActionsComponent
  ],
  imports: [RouterModule, CommonModule, FormsModule, FontAwesomeModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthGuard,
    AuthService,
    JwtService,
    TfaService,
    BoxBookingService
  ],
  exports: [
    HomeMessageComponent,
    UniversityIdPipe,
    BreadCrumbComponent,
    NavbarComponent,
    UserActionsComponent
  ],
  entryComponents: [SearchbarComponent]
})
export class SharedModule {}
