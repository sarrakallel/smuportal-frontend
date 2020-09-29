import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit
} from "@angular/core";
import { SearchbarComponent } from "@app/dashboard/searchbar/searchbar.component";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements AfterContentInit {
  constructor(private resolver: ComponentFactoryResolver) {}
  @ViewChild("entry", { static: true, read: ViewContainerRef })
  entry: ViewContainerRef;
  ngAfterContentInit(): void {
    const searchbarFactory = this.resolver.resolveComponentFactory(
      SearchbarComponent
    );
    // Uncomment to enable search bar
    this.entry.createComponent(searchbarFactory);
  }
}
