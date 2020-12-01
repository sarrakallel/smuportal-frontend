import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoxListComponent } from "./box-list/";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "@app/shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CalendarComponent } from "./calendar/";
import { ColorGuideComponent } from "./color-guide/color-guide.component";
import { BoxBookingComponent } from "./box-booking/box-booking.component";
const routes: Routes = [
  {
    path: "",
    component: BoxListComponent
  },
  {
    path: "book-box/:id",
    component: BoxBookingComponent
  }
];

@NgModule({
  declarations: [
    BoxListComponent,
    CalendarComponent,
    ColorGuideComponent,
    BoxBookingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    NgbModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class LogisticsReservationModule {}
