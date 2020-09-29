import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector : 'app-home-portal',
  templateUrl : 'portal.component.html',
  styleUrls : ['portal.component.css']
})
export class PortalComponent {
  faArrowRight = faArrowRight;
}
