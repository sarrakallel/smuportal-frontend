import { Component, OnInit } from "@angular/core";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-color-guide",
  templateUrl: "./color-guide.component.html",
  styleUrls: ["./color-guide.component.css"]
})
export class ColorGuideComponent implements OnInit {
  faSquare = faSquare;
  constructor() {}

  ngOnInit() {}
}
