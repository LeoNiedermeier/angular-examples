import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  template: `
  <nav>
  <a routerLink="./child-1-1" routerLinkActive="active">child-1-1</a>
  <a routerLink="./child-1-2" routerLinkActive="active">child-1-2</a>
  </nav>
  <router-outlet></router-outlet>`
})
export class ChildExampleComponent {
  constructor() {}
}

@Component({
  template: `<p>Child 1 1</p>`
})
export class Child11Component {
  constructor() {}
}

@Component({
  template: `<p>Child 1 2</p>`
})
export class Child12Component {
  constructor() {}
}

export const childExampleChildrenRoutes: Route[] = [
  {
    path: 'child-1-1',
    component: Child11Component
  },
  {
    path: 'child-1-2',
    component: Child12Component
  }
];
