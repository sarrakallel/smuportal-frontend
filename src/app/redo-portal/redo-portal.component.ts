import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-redo-portal',
  templateUrl: './redo-portal.component.html',
  styleUrls: ['./redo-portal.component.css']
})
export class RedoPortalComponent implements OnInit {

  constructor() { }
  faArrowRight = faArrowRight;

  ngOnInit() {
  }

}
