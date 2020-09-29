import { Component, OnInit } from "@angular/core";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { BoxBookingService } from "@app/shared";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number; month: number };

  constructor(
    private calendar: NgbCalendar,
    private boxBookingService: BoxBookingService
  ) {}

  ngOnInit() {
    this.model = this.calendar.getToday();
    this.boxBookingService.currentDate = this.calendar.getToday();
    console.log(this.model);
  }

  onDateSelect(event) {
    this.boxBookingService.currentDate = event;
    console.log(event);
  }
}
