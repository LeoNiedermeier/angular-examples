import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <nav>
    <a routerLink="./child-example">child example</a>
    <a routerLink="./route-parameters">Route Parameters</a>
  </nav>
<router-outlet></router-outlet>`
})
export class RoutesDashboardComponent {
  constructor() {}
}
