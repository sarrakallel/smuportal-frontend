import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from 'rxjs';
import {Program} from '../models/program.model'

@Injectable({
  providedIn: 'root'
})
export class EpsService {
  listOfPrograms: any;
  constructor(private httpClient: HttpClient) { }
     
    addProgram(program: Program): void {
       this.httpClient.post<any>("http://localhost:3000/api/user/addProgram", program)
         .subscribe({
           next: (data: any) => {
            this.addNewProgram(program);
            console.log(data);
           },
           error: (data: any) => console.warn(data)
         })
    }
  
    private addNewProgram(program: Program) {
      const programs: Program[] = this.listOfPrograms.getValue();
      programs.push(program);
      this.listOfPrograms.next(programs);
    }
  
    getPrograms(): Observable<Program[]> {
      return this.httpClient.get<Program[]>("http://localhost:3000/api/user/getPrograms");
    }
}