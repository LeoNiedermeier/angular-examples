import { Component } from '@angular/core';

@Component({
  template: `
<nav>
  <!-- Beide Links gehen auf die gleich URL -->
  <a [routerLink]="['guarded']">Guarded Sub-Route</a>
  <a [routerLink]="['guarded']" [queryParams]="{activate: true}" >Guarded Sub-Route with query parameter</a>
</nav>

<router-outlet></router-outlet>`
})
export class RouteGuardsParentComponent {
  constructor() {}
}
