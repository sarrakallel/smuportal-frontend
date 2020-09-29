import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../../shared/services/app.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  faSearch = faSearch;
  searchTerm = '';
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.search(this.searchTerm).subscribe();
  }

  onSearchTermChange(): void {
    this.appService.search(this.searchTerm).subscribe();
  }
}
