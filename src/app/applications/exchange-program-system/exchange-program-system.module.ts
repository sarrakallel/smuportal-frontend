import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ListProgramsComponent } from './list-programs/list-programs.component';
import { EpsMainPageComponent } from './eps-main-page/eps-main-page.component';
import { SharedModule } from "@app/shared/shared.module";
import { EpsAddProgramComponent } from './eps-add-program/eps-add-program.component';

const routes: Routes = [
  {
    path: "",
    component: EpsMainPageComponent
  },
  {
    path: "list",
    component: ListProgramsComponent
  },
  {
    path: "add",
    component: EpsAddProgramComponent
  }
];

@NgModule({
  declarations: [ListProgramsComponent, EpsMainPageComponent, EpsAddProgramComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ExchangeProgramSystemModule { }
