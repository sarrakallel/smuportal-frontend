import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "apps", children: [
      {
        path: "logistics", loadChildren: () =>
          import("./logistics-reservation/logistics-reservation.module").then(
            m => m.LogisticsReservationModule
          )
      },
      {
        path: "eps", loadChildren: () =>
          import("./exchange-program-system/exchange-program-system.module").then(
            m => m.ExchangeProgramSystemModule
          )
      },
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsModule { }
