import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, NavigationStart} from '@angular/router';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {BreadCrumb} from './breadcrumb';
@Component({
selector: 'app-breadcrumb',
templateUrl: 'breadcrumb.component.html',
styleUrls: ['breadcrumb.component.css']
})
export class BreadCrumbComponent implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  breadcrumbs;
  ngOnInit() {
    this.breadcrumbs = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(event => this.buildBreadCrumb(this.activatedRoute.root))
    );
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '',
                  breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'Profile';
    const path = route.routeConfig ? route.routeConfig.path : '';
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl,
    };
    if (breadcrumb.label === 'Profile') {
      breadcrumb.label = 'Dashboard';
      breadcrumb.url = '/dashboard';
    }
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
