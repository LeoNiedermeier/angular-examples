import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <nav>
    <a routerLink="./child-example">Route Child Example</a>
    <a routerLink="./route-parameters">Route Parameters</a>
    <a routerLink = "./route-guard">Route Guard</a>
    <a [routerLink] = "['route-resolve','1234']">Route Resolve</a>
  </nav>
<router-outlet></router-outlet>`
})
export class RoutesDashboardComponent {
  constructor() {}
}
