import { Component, OnInit } from "@angular/core";
import { AppService } from "../../shared/";
import { Application } from "@app/shared/models/apps.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-list-of-features",
  templateUrl: "./list-of-features.component.html",
  styleUrls: ["./list-of-features.component.css"]
})
export class ListOfFeaturesComponent implements OnInit {
  constructor(private appService: AppService) {}
  userApps$: Observable<Application[]>;
  searchTerm = "";

  ngOnInit() {
    this.userApps$ = this.appService.getSearchResults();
  }
}
