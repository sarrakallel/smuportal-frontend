import { Component, OnInit } from '@angular/core';
import {EpsService} from "@app/shared/services"
import { Program } from "@app/shared/models";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-programs',
  templateUrl: './list-programs.component.html',
  styleUrls: ['./list-programs.component.css']
})
export class ListProgramsComponent implements OnInit {

  listOfPrograms: BehaviorSubject<Program[]> = new BehaviorSubject<Program[]>([]);
  

  constructor(private epsService: EpsService, private router: Router) { }

  ngOnInit() {
    this.epsService.getPrograms().subscribe({
      next: (data: Program[]) => this.listOfPrograms.next(data),
      error: (data: any) => console.log(data)

    })
  }
  
goToAdd() {
  this.router.navigate(["/apps/eps/add"])
}
}