import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { RouteParametersChildComponent } from '../route-parameters-child/route-parameters-child.component';

@Component({
  selector: 'app-route-parameters-parent',
  templateUrl: './route-parameters-parent.component.html'
})
export class RouteParametersParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
