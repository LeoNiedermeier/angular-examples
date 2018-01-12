import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <nav>
    <a routerLink="./child-1" routerLinkActive="active">child-1</a>
    <a routerLink="./child-2" routerLinkActive="active">child-2</a>
  </nav>
<router-outlet></router-outlet>`
})
export class RoutesDashboardComponent {
  constructor() {}
}
