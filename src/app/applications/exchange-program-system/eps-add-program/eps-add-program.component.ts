import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EpsService } from '@app/shared';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-eps-add-program',
  templateUrl: './eps-add-program.component.html',
  styleUrls: ['./eps-add-program.component.css']
})
export class EpsAddProgramComponent implements OnInit {

  programForm;
  programAdded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private formBuilder: FormBuilder, private epsService: EpsService,
   private router: Router) {
    this.programForm = this.formBuilder.group({
      name: "",
      country: "",
      
    })
  }
  
  ngOnInit() {
  }

  onSubmit(program) {
    this.programForm.reset();
    console.warn("Program Data:", program);
    this.epsService.addProgram(program);
    this.programAdded.next(true);
  }
  
  goBack() {
    this.router.navigate(["/apps/eps"])
  }
  
}