import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/interval';
@Injectable()
export class ExampleDataResolver implements Resolve<String> {
  constructor(private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<String> {
    // Daten laden ...
    const id = route.paramMap.get('id');
    console.log('ID ', id);
    // delay output of by an extra second
    const example = Observable.of('Resolve with delay 1 sec. The id was ' + id).delay(1000);

    return example;
  }
}
