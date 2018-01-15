import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanActivate } from '@angular/router';

@Component({
  template: ` <p> Guarded Child</p>`
})
export class RouteGuardsChildComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}


